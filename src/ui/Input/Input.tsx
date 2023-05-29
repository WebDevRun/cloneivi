import { ChangeEventHandler, FC } from 'react'

import styles from './Input.module.scss'

export interface InputProps {
  type?: 'text' | 'search'
  description?: string
  placeholder?: string
  text?: string
  setText: (str: string) => void
}

export const Input: FC<InputProps> = ({
  description = '',
  placeholder = '',
  type = 'text',
  text = '',
  setText,
}) => {
  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value)
  }

  return (
    <label className={styles.label}>
      <span className={styles.description}>{description}</span>
      <input
        type={type}
        className={styles.input}
        value={text}
        onChange={inputChangeHandler}
        placeholder={placeholder}
      />
    </label>
  )
}
