import cn from 'classnames'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC, MouseEventHandler, ReactElement } from 'react'

import styles from './LinkBtn.module.scss'

interface LinkProps {
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>
  href: string
  mode: 'footer' | 'actor' | 'genres' | 'account' | 'accountLinks'
  type: 'square' | 'circle'
  subText?: string
  text?: string
  icon?: ReactElement
  background?: 'lightgray' | 'default'
  imgSrc?: string
  imgAlt?: string
}

export const LinkBtn: FC<LinkProps> = ({
  href,
  mode = 'footer',
  type = 'square',
  subText,
  text,
  background = 'default',
  icon,
  imgSrc = '',
  imgAlt = '',
  ...props
}) => {
  return (
    <Link {...props} className={styles.link} href={href}>
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
          {mode !== 'actor' && icon && (
            <div className={styles.iconBox}>{icon}</div>
          )}
          {mode === 'actor' && (
            <Image width={44} height={44} src={imgSrc} alt={imgAlt} />
          )}

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
