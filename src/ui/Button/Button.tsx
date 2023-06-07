import cn from 'classnames'
import React, { FC, MouseEventHandler } from 'react'

import { INameIcons, INameIconsExt } from '@/types/Icons'

import { Svg } from '../Svg'

import styles from './Button.module.scss'

export interface ButtonProps {
  icon?: INameIcons | INameIconsExt
  iconExt?: boolean
  iconFill?: string
  background?: 'gray' | 'primary' | 'red' | 'transparent'
  theme?: 'active' | 'passive' | 'rating' | 'social'
  withBorder?: 'borderNone' | 'borderSm' | 'borderMd' | 'borderBg' | 'round'
  size?: 'small' | 'middle' | 'big'
  width?: 'full' | 'fitContent' | 'asHeight'
  fields?: 'noneFields' | 'widthFields'
  text?: string
  subText?: string
  type?: 'button' | 'reset' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonProps> = ({
  icon,
  iconExt = false,
  iconFill,
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
        <div className={styles.icon}>
          {<Svg icon={icon} ext={iconExt} size={iconSize} fill={iconFill} />}
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
