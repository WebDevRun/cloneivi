import { FC, MouseEventHandler, useState } from 'react'

import { formatToMonthName } from '@/utils/functions/formatToMonthName'

import { CommentAvatar } from '../CommentAvatar'
import { CommentForm } from '../CommentForm'
import { CommentThumb } from '../CommentThumb'

import styles from './CommentItem.module.scss'

export interface CommentItemProps {
  date: string
  text: string
  like: number
  firstName: string
  lastName: string
  filmId: string
  parentFilmId: string | null
}

export const CommentItem: FC<CommentItemProps> = ({
  date,
  text,
  like,
  firstName,
  lastName,
  filmId,
  parentFilmId,
}) => {
  const [open, setOpen] = useState(false)

  const openCommentFormHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setOpen(true)
  }

  return (
    <div className={styles.commentItem}>
      <CommentAvatar firstName={firstName} />

      <p className={styles.title}>
        {`${firstName} ${lastName}`}
        <span className={styles.date}>{formatToMonthName(date, 'ru')}</span>
      </p>

      <p className={styles.text}>{text}</p>

      <div className={styles.voteContainer}>
        <button className={styles.button}>
          <CommentThumb type='up' className={styles.buttonImage} />
        </button>
        <span className={styles.vote}>{like}</span>
        <button className={styles.button}>
          <CommentThumb type='down' className={styles.buttonImage} />
        </button>
      </div>

      <button className={styles.answerButton} onClick={openCommentFormHandler}>
        Ответить
      </button>

      {open && (
        <div className={styles.answerForm}>
          <CommentForm
            type='answer'
            filmId={filmId}
            parentFilmId={parentFilmId}
            setOpen={setOpen}
          />
        </div>
      )}
    </div>
  )
}
