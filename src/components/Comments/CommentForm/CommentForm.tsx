import cn from 'classnames'
import { ChangeEventHandler, FC, useEffect, useState } from 'react'

import { CommentAvatar } from '../CommentAvatar'

import styles from './CommentForm.module.scss'

const textLengthLimit = 10

export const CommentForm: FC = () => {
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

  return (
    <form className={styles.commentForm}>
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
