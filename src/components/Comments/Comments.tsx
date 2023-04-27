import { FC } from 'react'

import { CommentForm } from './CommentForm'
import { CommentItem } from './CommentItem'
import styles from './Comments.module.scss'

interface CommentProps {
  text: string
  date: string
  vote: number
}
export interface CommentsProps {
  comments: CommentProps[]
}

export const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <div className={styles.comments}>
      <div className={styles.commentForm}>
        <CommentForm />
      </div>

      <ul className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <li key={comment.date}>
              <CommentItem
                vote={comment.vote}
                date={comment.date}
                text={comment.text}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
