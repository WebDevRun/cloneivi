import cn from 'classnames'
import { DefaultTFuncReturn } from 'i18next'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { INameIcons, INameIconsExt } from '@/types/Icons'

import { Svg } from '../Svg'

import styles from './LinkBtn.module.scss'

interface LinkProps {
  href: string
  mode?: 'footer' | 'actor' | 'genres' | 'account' | 'accountLinks' | 'actor2'
  type?: 'square' | 'circle'
  subText?: string | DefaultTFuncReturn
  text?: string | DefaultTFuncReturn
  icon?: INameIcons | INameIconsExt
  iconExt?: boolean
  background?: 'lightgray' | 'default' | 'red'
  imgSrc?: string
  imgAlt?: string
  iconSize?: 'small' | 'middle' | 'big' | 'large'
}

export const LinkBtn: FC<LinkProps> = ({
  href,
  mode = 'footer',
  type = 'square',
  subText,
  text,
  background = 'default',
  icon,
  iconExt = false,
  imgSrc = '',
  imgAlt = '',
  iconSize = 'middle',
}) => {
  return (
    <Link className={styles.link} href={href}>
      {mode !== 'actor2' && <div
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
            <div className={styles.iconBox}>
              <Svg icon={icon} size={iconSize} ext={iconExt} />
            </div>
          )}
          {mode === 'actor' && (
            <div className={styles.actorImg} style={{background: `url(${imgSrc}) center/cover no-repeat`}} />
          )}

          {(text || subText) && mode !== 'actor' && (
            <div className={styles.textContainer}>
              {subText && <p className={styles.subText}>{subText}</p>}
              {text && <p className={styles.mainText}>{text}</p>}
            </div>
          )}
        </div>
      </div>}
      {mode === 'actor' && text && <p className={styles.actorName}>{text}</p>}
      {mode === 'actor2' && 
        <div className={styles.actor2}>
          <Image className={styles.actor2Img} width={88} height={88} src={imgSrc} alt={imgAlt} />
          <p className={styles.actor2Text}>{text?.split(' ').splice(0, 1)[0]}</p>
          <p className={styles.actor2Text}>{text?.split(' ').splice(1).join(' ')}</p>
          <p className={styles.actor2SubText}>{subText}</p>
        </div>
      }
    </Link>
  )
}
