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

import { useAddCommentMutation } from '@/store/endpoints/comments'

import { CommentAvatar } from '../CommentAvatar'

import styles from './CommentForm.module.scss'

interface CommentFormProps {
  type?: 'comment' | 'answer'
  filmId: string
  parentFilmId?: string | null
  setOpen?: Dispatch<SetStateAction<boolean>>
}

const textLengthLimit = 10

export const CommentForm: FC<CommentFormProps> = ({
  type = 'comment',
  filmId,
  parentFilmId = null,
  setOpen,
}) => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [setComment] = useAddCommentMutation()

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

    const formData = {
      text,
      film_id: filmId,
      parent_id: parentFilmId,
      user_id: process.env.NEXT_PUBLIC_USER_ID as string, //Пока авторизации нет
    }

    await setComment(formData)

    setText('')
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
