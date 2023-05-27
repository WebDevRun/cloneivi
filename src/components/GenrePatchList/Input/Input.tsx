import { ChangeEventHandler, FC } from 'react'

import styles from './Input.module.scss'

export interface InputProps {
  description: string
  text: string
  setText: ChangeEventHandler<HTMLInputElement>
}

export const Input: FC<InputProps> = ({ description, text, setText }) => {
  return (
    <label className={styles.label}>
      <span>{description}:</span>
      <input
        type='text'
        className={styles.input}
        value={text}
        onChange={setText}
      />
    </label>
  )
}
