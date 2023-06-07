import cn from 'classnames'
import React, { FC, MouseEventHandler } from 'react'

import { INameIcons } from '@/types/Icons'

import { Svg } from '../Svg'

import styles from './Button.module.scss'

export interface ButtonProps {
  icon?: INameIcons
  background?: 'gray' | 'primary' | 'red' | 'transparent'
  theme?: 'active' | 'passive' | 'rating'
  withBorder?: 'borderNone' | 'borderSm' | 'borderMd' | 'borderBg'
  size?: 'small' | 'middle' | 'big'
  width?: 'full' | 'fitContent'
  fields?: 'noneFields' | 'widthFields'
  text?: string
  subText?: string
  type?: 'button' | 'reset' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonProps> = ({
  icon,
  background = 'red',
  theme = 'active',
  withBorder = 'borderNone',
  size = 'middle',
  width = 'fitContent',
  text,
  subText,
  fields = 'widthFields',
  type = 'button',
  onClick,
}) => {
  const mainCn = cn(
    styles.button,
    styles[background],
    styles[theme],
    styles[withBorder],
    styles[size],
    styles[width],
    !text && styles.onlyIcon,
    fields === 'noneFields' && styles[fields],
  )

  const iconSize = size === 'big' ? 'big' : 'middle'

  return (
    <button type={type} className={mainCn} onClick={onClick}>
      {icon && (
        <div className={styles.icon}>{<Svg icon={icon} size={iconSize} />}</div>
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
