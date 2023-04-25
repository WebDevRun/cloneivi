import cn from 'classnames'
import { FC } from 'react'

import styles from './Select.module.scss'

export interface SelectProps {
  type: 'radio' | 'checkbox',
  text: string,
  disabled?: boolean
}

export const Select: FC<SelectProps> = ({type, text, disabled = false}) => {
  return (
    <label className={cn(
      styles.select,
      styles[type],
      disabled && styles.disabled,
    )} style={{cursor: disabled ? 'default' : 'pointer'}}>
      <input type={type} className={styles.input} disabled={disabled} />
      <span className={styles.text}>{text}</span>
    </label>
  )
}
