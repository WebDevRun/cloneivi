import cn from 'classnames'
import React, { FC, MouseEventHandler } from 'react'

import { INameIcons } from '@/types/Icons'

import { HeaderSvg } from '../svg/HeaderSvg'

import styles from './Button.module.scss'

export interface ButtonProps {
  icon?: INameIcons
  background?: 'gray' | 'primary' | 'red' | 'transparent'
  color?: 'active' | 'passive'
  withBorder?: 'borderNone' | 'borderSm' | 'borderMd' | 'borderBg'
  size?: 'small' | 'middle' | 'big'
  text?: string
  subText?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonProps> = ({
  icon,
  background = 'red',
  color = 'active',
  withBorder = 'borderNone',
  size = 'middle',
  text,
  subText,
  onClick,
}) => {
  const mainCn = cn(
    styles.button,
    styles[background],
    styles[color],
    styles[withBorder],
    styles[size],
    !text && styles.onlyIcon,
  )

  const iconSize = size === 'big' ? 'big' : 'middle'

  return (
    <button type='button' className={mainCn} onClick={onClick}>
      {icon && (
        <div className={styles.icon}>
          {<HeaderSvg icon={icon} size={iconSize} />}
        </div>
      )}
      {text && (
        <div className={styles.mainText}>
          {text}
          <div className={styles.subText}>{subText}</div>
        </div>
      )}
    </button>
  )
}
