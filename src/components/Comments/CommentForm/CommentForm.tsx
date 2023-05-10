import cn from 'classnames'
import {
  ChangeEventHandler,
  Dispatch,
  FC,
  FormEventHandler,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

import { $instance } from '@/axios'
import { IComment } from '@/types/Comments'

import { CommentAvatar } from '../CommentAvatar'

import styles from './CommentForm.module.scss'

interface CommentFormProps {
  type?: 'comment' | 'answer'
  filmId: string
  parentFilmId?: string | null
  setComments: Dispatch<SetStateAction<IComment[]>>
  setOpen?: Dispatch<SetStateAction<boolean>>
}

const textLengthLimit = 10

export const CommentForm: FC<CommentFormProps> = ({
  type = 'comment',
  filmId,
  parentFilmId = null,
  setComments,
  setOpen,
}) => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (text.length >= textLengthLimit) {
      setIsDisabled(false)
      setIsError(false)
      return
    }

    if (text.length === 0) {
      setIsError(false)
      setIsDisabled(true)
      return
    }

    setIsError(true)
    setIsDisabled(true)
  }, [text])

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.currentTarget.value)
  }

  const submitHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    //Пока авторизации нет
    const token = process.env.NEXT_PUBLIC_TOKEN

    const formData = {
      text,
      vote: 36,
      film_id: filmId,
      parent_id: null,
      user_id: process.env.NEXT_PUBLIC_USER_ID, //Пока авторизации нет
    }

    try {
      const { data } = await $instance.post(
        'http://localhost:4000/comments',
        JSON.stringify(formData),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )

      setComments((prev) => [data, ...prev])
      setText('')
    } catch (error) {
      console.log('error', error) // Временно, пока layout-a нет
    }
  }

  const openClickhandler: MouseEventHandler<HTMLButtonElement> = () => {
    setOpen && setOpen(false)
  }

  return (
    <form className={styles.commentForm} onSubmit={submitHandler}>
      <CommentAvatar />

      <div className={styles.inputContainer}>
        <label className={styles.label}>
          <input
            className={cn(styles.input, {
              [styles.error]: isError,
            })}
            type='text'
            value={text}
            onChange={inputChangeHandler}
          />
          <p
            className={cn(styles.placeholder, {
              [styles.hasText]: text,
              [styles.error]: isError,
            })}
          >
            {type === 'comment' ? 'Написать отзыв' : 'Ответить'}
          </p>
        </label>

        {text.length > 0 && text.length < textLengthLimit && (
          <p className={styles.caption}>
            Минимум {textLengthLimit} символов, вы ввели {text.length}
          </p>
        )}
      </div>

      <div className={styles.buttonContainer}>
        <button
          className={cn(styles.button, {
            [styles.disabled]: isDisabled,
          })}
          type='submit'
          disabled={isDisabled}
        >
          Отправить
        </button>
        {type === 'answer' && (
          <button
            className={cn(styles.button)}
            type='button'
            onClick={openClickhandler}
          >
            Закрыть
          </button>
        )}
      </div>
    </form>
  )
}
