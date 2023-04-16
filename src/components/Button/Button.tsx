import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
import Image from 'next/image'

interface ButtonProps {
  /**
   * Назначение кнопки
   */
  mode?:
    | 'primary'
    | 'secondary'
    | 'player'
    | 'trailer'
    | 'share'
    | 'sign_in'
    | 'search'
    | 'defer'
    | 'free'
    | 'rate_sm'
    | 'rate_md'
    | 'filter'
  /**
   * Иконка
   */
  iconSrc?: string
  /**
   * Alt текст
   */
  iconAlt?: string
  /**
   * Основной текст на кнопке
   */
  text?: string
  /**
   * Дополнительный текст на кнопке
   */
  subText?: string
  /**
   * Обработчик нажатия
   */
  onClick?: () => void
}

/**
 * Primary UI component
 */

export const Button = ({
  mode = 'secondary',
  text,
  subText,
  iconSrc = '',
  iconAlt = '',
}: ButtonProps) => {
  const mainCn = cn(styles.button, styles[mode])

  return (
    <button type="button" className={mainCn}>
      {iconSrc && iconAlt && (
        <div className={styles.icon}>
          <Image src={iconSrc} alt={iconAlt} />
        </div>
      )}
      {text && (
        <div className={styles.main_text}>
          {text}
          <div className={styles.sub_text}>{subText}</div>
        </div>
      )}
    </button>
  )
}
