import {
  Dispatch,
  FC,
  MouseEventHandler,
  SetStateAction,
  useState,
} from 'react'

import { IComment } from '@/types/Comments'
import { formatToMonthName } from '@/utils/functions/formatToMonthName'

import { CommentAvatar } from '../CommentAvatar'
import { CommentForm } from '../CommentForm'
import { CommentThumb } from '../CommentThumb'

import styles from './CommentItem.module.scss'

export interface CommentItemProps {
  date: string
  text: string
  vote: number
  firstName: string
  lastName: string
  filmId: string
  parentFilmId: string | null
  setComments: Dispatch<SetStateAction<IComment[]>>
}

export const CommentItem: FC<CommentItemProps> = ({
  date,
  text,
  vote,
  firstName,
  lastName,
  filmId,
  parentFilmId,
  setComments,
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
        <span className={styles.vote}>{vote}</span>
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
            setComments={setComments}
            setOpen={setOpen}
          />
        </div>
      )}
    </div>
  )
}
