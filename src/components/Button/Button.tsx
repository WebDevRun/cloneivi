import React, { ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
import Image, { ImageProps, StaticImageData } from 'next/image'
import logout from './logout.svg'
import playArrow from './play_arrow.svg'

const icon = {
  share: logout,
  trailer: playArrow,
}

interface ButtonProps {
  /**
   * Назначение кнопки
   */
  mode: 'primary' | 'secondary' | 'makoto' | 'player' | 'trailer' | 'share'
  /**
   * Цвет фона
   */
  backgroundColor?: string
  /**
   * Размер кнопки
   */
  size: 'small' | 'medium' | 'large'
  /**
   * Текст на кнопке
   */
  text?: string
  subText?: string
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
  text,
  subText,
  children,
  ...props
}: ButtonProps) => {
  const mainCn = cn(styles.button, styles[mode], styles[size])

  const iconSrc = icon[mode]
  const iconAlt = 'slkdflskdfk'

  return (
    <button type="button" className={mainCn} {...props}>
      {iconSrc && iconAlt && (
        <div className="icon_button">
          <Image width={16} height={16} src={iconSrc} alt={iconAlt} />
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
