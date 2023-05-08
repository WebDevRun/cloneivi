import { FC } from 'react'

import { IComment } from '@/types/Comments'

import { CommentForm } from './CommentForm'
import { CommentItem } from './CommentItem'
import styles from './Comments.module.scss'

export interface CommentProps {
  comments: IComment[]
}

export const Comments: FC<CommentProps> = ({ comments }) => {
  const renderComments = (comments: IComment[]) => {
    return (
      <ul className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentItem
                vote={comment.vote}
                date={comment.createdAt}
                text={comment.text}
                firstName={comment.user.profile.first_name}
                lastName={comment.user.profile.last_name}
              />

              {comment.sub_comments.length > 0 &&
                renderComments(comment.sub_comments)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className={styles.comments}>
      <div className={styles.commentForm}>
        <CommentForm filmId={comments[0].film_id} />
      </div>

      {renderComments(comments)}
    </div>
  )
}
