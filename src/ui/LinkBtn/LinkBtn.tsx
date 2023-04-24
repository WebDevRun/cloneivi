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
}

export const LinkBtn: FC<LinkProps> = ({
  subText,
  text,
  type,
  iconSrc,
  iconAlt,
  href,
}) => {
  return (
    <Link
      className={cn(styles.btn, styles[type], {
        [styles.btn_withSubText]: subText,
      })}
      href={href}
    >
      <div className={styles.btnContent}>
        {iconSrc && iconAlt && (
          <Image width={20} height={20} src={iconSrc} alt={iconAlt} />
        )}

        {(text || subText) && (
          <div className={styles.textContainer}>
            {subText && <p className={styles.subText}>{subText}</p>}
            {text && <p className={styles.text}>{text}</p>}
          </div>
        )}
      </div>
    </Link>
  )
}
