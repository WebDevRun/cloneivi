import { ChangeEventHandler, FC } from 'react'

import styles from './Input.module.scss'

export interface InputProps {
  label: string
  type?: 'text' | 'url' | 'email' | 'password' | 'search'
  required?: boolean
  name: string
  defaultValue?: string
  value?: string
  minLength?: number
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input: FC<InputProps> = ({
  label,
  type = 'text',
  required = true,
  name,
  defaultValue,
  value,
  minLength,
  onChange,
}) => {
  return (
    <label className={styles.inputBody}>
      <input
        className={styles.editBox}
        name={name}
        id={name}
        autoComplete='on'
        required={required}
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        minLength={minLength}
      ></input>

      <div className={styles.label}>{label}</div>
    </label>
  )
}
