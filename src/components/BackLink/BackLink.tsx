import { useRouter } from 'next/router'
import { FC } from 'react'

import { Svg } from '@/ui/Svg'

import styles from './BackLink.module.scss'

export interface BackLinkProps {
  text: string
  iconName?: 'arrowLeft'
  iconSize?: 'middle'
}

export const BackLink: FC<BackLinkProps> = ({
  text,
  iconName = 'arrowLeft',
  iconSize = 'middle',
}) => {
  const router = useRouter()

  return (
    <div className={styles.backLink} onClick={() => router.back()}>
      <div className={styles.icon}>
        <Svg icon={iconName} size={iconSize} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}
