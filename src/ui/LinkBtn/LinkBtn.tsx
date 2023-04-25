import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './LinkBtn.module.scss'

interface LinkProps {
  subText?: string
  text?: string
  type: 'square' | 'circle'
  iconSrc?: string | any
  iconAlt?: string
  href: string
  imgSize?: number
  mode: 'footer' | 'actor'
}

export const LinkBtn: FC<LinkProps> = ({
  subText,
  text,
  type,
  iconSrc,
  iconAlt,
  href,
  imgSize,
  mode,
}) => {
  return (
    <Link className={styles.link} href={href}>
      <div
        style={mode === 'actor' ? { padding: '6px', backgroundColor: 'rgba(255,255,255,.16)' } : {}}
        className={cn(styles.btn, styles[type], {
          [styles.btn_withSubText]: subText,
          [styles.actor]: mode === 'actor'
        })}
      >
        <div className={styles.btnContent}>
          {iconSrc && iconAlt && (
            <Image
              width={imgSize}
              height={imgSize}
              src={iconSrc}
              alt={iconAlt}
            />
          )}

          {((text || subText) && mode === 'footer') && (
            <div className={styles.textContainer}>
              {subText && <p className={styles.subText}>{subText}</p>}
              {text && <p className={styles.text}>{text}</p>}
            </div>
          )}
        </div>
      </div>
      {mode === 'actor' && (
        <>
          {text && <p className={styles.actorName}>{text}</p>}
        </>
      )}
    </Link>
  )
}
