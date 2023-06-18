import cn from 'classnames'
import { FC } from 'react'

import styles from './Select.module.scss'

export interface SelectProps {
  type: 'radio' | 'checkbox'
  name: string
  disabled?: boolean
  category: string
  checked: boolean
  onClick: () => void
}

export const Select: FC<SelectProps> = ({type, disabled = false, name, category, checked, onClick}) => {
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
          defaultChecked={checked}
          onClick={onClick}
        />
        <span className={styles.text}>{name}</span>
      </label>
  )
}
