import Image from 'next/image'
import { FC } from 'react'

import avatar from '@assets/images/comments/avatar.svg'

import styles from './CommentAvatar.module.scss'

interface CommentAvatarProps {
  firstName?: string
}

export const CommentAvatar: FC<CommentAvatarProps> = ({ firstName }) => {
  return (
    <div className={styles.commentAvatar}>
      {firstName ? (
        <div className={styles.firstLetter}>{firstName[0].toUpperCase()}</div>
      ) : (
        <Image className={styles.avatar} src={avatar} alt='avatar' />
      )}
    </div>
  )
}
