import Image from 'next/image'
import { FC } from 'react'

import avatar from '@assets/images/comments/avatar.svg'

import styles from './CommentAvatar.module.scss'

interface CommentAvatarProps {
  name?: string
}

export const CommentAvatar: FC<CommentAvatarProps> = ({ name }) => {
  return (
    <div className={styles.commentAvatar}>
      {name ? (
        <div className={styles.firstLetter}>{name[0].toUpperCase()}</div>
      ) : (
        <Image className={styles.avatar} src={avatar} alt='avatar' />
      )}
    </div>
  )
}
