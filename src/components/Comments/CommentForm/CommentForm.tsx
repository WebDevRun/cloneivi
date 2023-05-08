import cn from 'classnames'
import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useEffect,
  useState,
} from 'react'

import { $instance } from '@/axios'

import { CommentAvatar } from '../CommentAvatar'

import styles from './CommentForm.module.scss'

interface CommentFormProps {
  filmId: string
}

const textLengthLimit = 10

export const CommentForm: FC<CommentFormProps> = ({ filmId }) => {
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
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZjdiMmJjMTUtZWE0OS00NTNlLWE5MjQtYzBjMzJiMjFjZWUwIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlcyI6W3sicm9sZV9pZCI6ImFiMjBhYjU5LThhMjYtNDUwYy04MWYwLTliNWNiZTQ2YjNlNCIsInZhbHVlIjoiYWRtaW4iLCJkZXNjcmlwdGlvbiI6ItCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAIn1dLCJpYXQiOjE2ODM1NDk5NTIsImV4cCI6MTY4MzYzNjM1Mn0.JpTAYtH3c808HxRte9DTCpOD6npMXnsrZzApNa1tTWo'

    const formData = {
      text,
      vote: 36,
      film_id: filmId,
      parent_id: null,
      user_id: 'f7b2bc15-ea49-453e-a924-c0c32b21cee0', //Пока авторизации нет
    }

    console.log(formData)
    // try {
    //   const response = await $instance.post('/comments', {
    //     body: JSON.stringify(formData),
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   })

    //   console.log(response)
    // } catch (error) {
    //   console.log(error)
    // }
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
            Написать отзыв
          </p>
        </label>

        {text.length > 0 && text.length < textLengthLimit && (
          <p className={styles.caption}>
            Минимум {textLengthLimit} символов, вы ввели {text.length}
          </p>
        )}
      </div>

      <div>
        <button
          className={cn(styles.button, {
            [styles.disabled]: isDisabled,
          })}
          type='submit'
          disabled={isDisabled}
        >
          Отправить
        </button>
      </div>
    </form>
  )
}
