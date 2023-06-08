import { useRouter } from 'next/router'
import { FC } from 'react'

import { useGetCommentsQuery } from '@/store/endpoints/comments'
import { IComment } from '@/types/comments'

import { CommentForm } from './CommentForm'
import { CommentItem } from './CommentItem'
import styles from './Comments.module.scss'

export const Comments: FC = () => {
  const router = useRouter()
  const { data: comments } = useGetCommentsQuery(router.query.id as string)

  const renderComments = (comments: IComment[] | undefined) => {
    if (comments === undefined) return null

    return (
      <ul className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentItem
                like={comment.like}
                date={comment.createdAt}
                text={comment.text}
                firstName={comment.user.profile.first_name}
                lastName={comment.user.profile.last_name}
                filmId={comment.film_id}
                parentFilmId={comment.comment_id}
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
        <CommentForm filmId={router.query.id as string} />
      </div>

      {renderComments(comments)}
    </div>
  )
}
