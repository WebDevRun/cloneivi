import React, { ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  /**
   * Назначение кнопки
   */
  mode?: 'primary' | 'secondary' | 'makoto'
  /**
   * Цвет фона
   */
  backgroundColor?: string
  /**
   * Размер кнопки
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Текст на кнопке
   */
  label?: string
  /**
   * Обработчик нажатия
   */
  onClick?: () => void
  /**
   * Код для иконки и чего-то еще
   */
  children?: ReactNode
}

/**
 * Primary UI component
 */

export const Button = ({
  mode = 'secondary',
  size = 'medium',
  backgroundColor,
  label,
  children,
  ...props
}: ButtonProps) => {
  const stylesMode =
    mode === 'primary'
      ? styles.button_primary
      : mode === 'secondary'
      ? styles.button_secondary
      : styles.button_makoto

  const stylesSize =
    size === 'small'
      ? styles.button_small
      : size === 'medium'
      ? styles.button_medium
      : styles.button_large

  const withIcon =
    label && children ? styles.button_with_icon : styles.button_only_icon

  return (
    <button
      type="button"
      className={[styles.button, stylesSize, stylesMode].join(' ')}
      {...props}
    >
      <div className={withIcon}>
        {children}
        {label}
      </div>
    </button>
  )
}
