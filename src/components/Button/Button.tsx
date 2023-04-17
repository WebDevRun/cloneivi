import cn from 'classnames'
import Image from 'next/image'
import React from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  mode?:
    | 'primary'
    | 'primaryMob'
    | 'secondary'
    | 'player'
    | 'trailer'
    | 'share'
    | 'signIn'
    | 'search'
    | 'defer'
    | 'free'
    | 'rateSm'
    | 'rateMd'
    | 'filter'
    | 'language'

  iconSrc?: string
  iconAlt?: string
  text?: string
  subText?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button = ({
  mode = 'secondary',
  text,
  subText,
  iconSrc = '',
  iconAlt = '',
  onClick,
}: ButtonProps) => {
  const mainCn = cn(styles.button, styles[mode])

  return (
    <button type="button" className={mainCn} onClick={onClick}>
      {iconSrc && iconAlt && (
        <div className={styles.icon}>
          <Image src={iconSrc} alt={iconAlt} />
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
