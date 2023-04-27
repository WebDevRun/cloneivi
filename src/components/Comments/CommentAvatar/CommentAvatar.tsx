import Image from 'next/image'
import { FC } from 'react'

import avatar from '@assets/images/comments/avatar.svg'

import styles from './CommentAvatar.module.scss'

export const CommentAvatar: FC = () => {
  return (
    <div className={styles.commentAvatar}>
      <Image className={styles.avatar} src={avatar} alt='avatar' />
    </div>
  )
}
