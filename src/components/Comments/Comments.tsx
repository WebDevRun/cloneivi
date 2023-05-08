import { FC } from 'react'

import { CommentForm } from './CommentForm'
import { CommentItem } from './CommentItem'
import styles from './Comments.module.scss'

interface IProfile {
  first_name: string
  last_name: string
}

interface IUser {
  profile: IProfile
}

interface IComment {
  comment_id: string
  text: string
  vote: number
  createAt: string
  user: IUser
  sub_comments: IComment[]
}

export interface CommentsProps {
  comments: IComment[]
}

export const Comments: FC<CommentsProps> = ({ comments }) => {
  const renderComments = (comments: IComment[]) => {
    return (
      <ul className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentItem
                vote={comment.vote}
                date={comment.createAt}
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
        <CommentForm />
      </div>

      {renderComments(comments)}
    </div>
  )
}
