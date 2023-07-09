import cn from 'classnames'
import { ChangeEventHandler, FC } from 'react'
import { InputHTMLAttributes } from 'react'

import styles from './Input.module.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input: FC<InputProps> = ({
  label,
  name,
  onChange,
  className,
  ...props
}) => {
  return (
    <label className={cn(styles.inputBody, className)}>
      <input
        className={styles.editBox}
        name={name}
        id={name}
        onChange={onChange}
        {...props}
      ></input>

      <div className={styles.label}>{label}</div>
    </label>
  )
}
