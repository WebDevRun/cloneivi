import cn from 'classnames'
import { FC } from 'react'

import styles from './Select.module.scss'

export interface SelectProps {
  type: 'radio' | 'checkbox',
  text: string,
  disabled?: boolean,
  name?: string
}

export const Select: FC<SelectProps> = ({type, text, disabled = false, name}) => {
  return (
    <label
      className={cn(
        styles.select,
        styles[type],
        disabled && styles.disabled,
      )}
      style={{cursor: disabled ? 'default' : 'pointer'}}
    >
      <input type={type} className={styles.input} disabled={disabled} name={name} />
      <span className={styles.text}>{text}</span>
    </label>
  )
}
