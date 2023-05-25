import cn from 'classnames'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC, ReactElement } from 'react'

import styles from './LinkBtn.module.scss'

interface LinkProps {
  href: string
  mode: 'footer' | 'actor' | 'genres' | 'account' | 'accountLinks'
  type: 'square' | 'circle'
  subText?: string
  text?: string
  icon?: ReactElement
  background?: 'lightgray' | 'default'
}

export const LinkBtn: FC<LinkProps> = ({
  href,
  mode = 'footer',
  type = 'square',
  subText,
  text,
  background = 'default',
  icon,
}) => {
  return (
    <Link className={styles.link} href={href}>
      <div
        className={cn(
          styles.btn,
          styles[type],
          styles[mode],
          styles[background],
          {
            [styles.btn_withSubText]: subText,
          },
        )}
      >
        <div
          className={cn(styles.btnContent, {
            [styles.genres]: mode === 'genres',
          })}
        >
          {mode !== 'actor' && icon && <div className={styles.iconBox}>{icon}</div>}

          {(text || subText) && mode !== 'actor' && (
            <div className={styles.textContainer}>
              {subText && <p className={styles.subText}>{subText}</p>}
              {text && <p className={styles.mainText}>{text}</p>}
            </div>
          )}
        </div>
      </div>
      {mode === 'actor' && text && <p className={styles.actorName}>{text}</p>}
    </Link>
  )
}
