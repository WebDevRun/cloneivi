import { ChangeEventHandler, FC } from 'react'

import styles from './Input.module.scss'

export interface InputProps {
  description: string
  text: string
  setText: (str: string) => void
}

export const Input: FC<InputProps> = ({ description, text, setText }) => {
  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value)
  }
  return (
    <label className={styles.label}>
      <span>{description}:</span>
      <input
        type='text'
        className={styles.input}
        value={text}
        onChange={inputChangeHandler}
      />
    </label>
  )
}
