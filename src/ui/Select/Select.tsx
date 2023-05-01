import cn from 'classnames'
import { FC } from 'react'

import styles from './Select.module.scss'

export interface SelectProps {
  type: 'radio' | 'checkbox'
  name: string | number
  disabled?: boolean
  category: string
  checked: boolean
  onClickHandler: (item: string | number) => void
  value?: string | number
}

export const Select: FC<SelectProps> = ({type, disabled = false, name, category, checked, onClickHandler, value}) => {
  return (
    <label
      className={cn(
        styles.select,
        styles[type],
        disabled && styles.disabled,
      )}
      style={{cursor: disabled ? 'default' : 'pointer'}}
    >
      <input
        type={type}
        className={styles.input}
        disabled={disabled}
        name={category}
        onClick={() => onClickHandler(value ? value : name)}
        defaultChecked={checked}
      />
      <span className={styles.text}>{name}</span>
    </label>
  )
}
