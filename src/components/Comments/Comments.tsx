import { FC } from 'react'

import { CommentForm } from './CommentForm'
import styles from './Comments.module.scss'

export interface CommentsProps {}

export const Comments: FC<CommentsProps> = () => {
  return (
    <div className={styles.comments}>
      <CommentForm />
    </div>
  )
}
