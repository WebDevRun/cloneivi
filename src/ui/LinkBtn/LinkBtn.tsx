import cn from 'classnames'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './LinkBtn.module.scss'

interface LinkProps {
  href: string
  mode: 'footer' | 'actor' | 'genres' | 'account' | 'accountLinks'
  type: 'square' | 'circle'
  subText?: string
  text?: string
  iconSrc?: string | StaticImageData
  iconAlt?: string
  background: 'lightgray' | 'default'
}

export const LinkBtn: FC<LinkProps> = ({
  href,
  mode,
  type,
  subText,
  text,
  iconSrc,
  iconAlt,
  background,
}) => {
  return (
    <Link className={styles.link} href={href}>
      <div
        className={cn(styles.btn, styles[type], styles[mode], styles[background], {
          [styles.btn_withSubText]: subText,
        })}
      >
        <div
          className={cn(styles.btnContent, {
            [styles.genres]: mode === 'genres',
          })}
        >
          {iconSrc && iconAlt && (
            <Image
              className={styles.image}
              width={mode === 'actor' ? 44 : undefined}
              height={mode === 'actor' ? 44 : undefined}
              src={iconSrc}
              alt={iconAlt}
            />
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
