import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Text } from '../../ui/ui'

import styles from './Badge.module.scss'

export interface BadgeProps {
  img: string
  href: string
  firstName?: string
  lastName?: string
  role?: string
  type?: 'circle' | 'square'
  size?: 'small' | 'medium'
  imgAlt?: string
}

export const Badge: FC<BadgeProps> = ({
  img,
  href,
  firstName,
  lastName,
  role,
  type = 'circle',
  size = 'medium',
  imgAlt = '',
}) => {
  return (
    <Link href={href} className={styles.badge}>
      <div
        className={cn(styles.imagePersonWrapper, styles[size], styles[type])}
      >
        <Image
          width={size === 'medium' ? 88 : 44}
          height={size === 'medium' ? 88 : 44}
          src={img}
          alt={imgAlt}
        />
      </div>
      <div className={cn(styles.textSection, styles[size])}>
        {firstName && (
          <Text variant='small' bold>
            {firstName}
          </Text>
        )}
        {lastName && (
          <Text variant='small' bold>
            {lastName}
          </Text>
        )}
        {role && (
          <Text className={styles.additional} variant='small'>
            {role}
          </Text>
        )}
      </div>
    </Link>
  )
}
