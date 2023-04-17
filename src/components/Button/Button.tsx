import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
import Image from 'next/image'

interface ButtonProps {
  mode?:
    | 'primary'
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

  iconSrc?: string
  iconAlt?: string
  text?: string
  subText?: string
  onClick?: () => void
}

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
        <div className={styles.mainText}>
          {text}
          <div className={styles.subText}>{subText}</div>
        </div>
      )}
    </button>
  )
}
