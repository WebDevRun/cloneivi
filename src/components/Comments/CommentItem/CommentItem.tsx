import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { FC, MouseEventHandler, useState } from 'react'

import { Svg } from '@/ui/Svg'
import { formatToMonthName } from '@/utils/functions/formatToMonthName'

import { CommentAvatar } from '../CommentAvatar'
import { CommentForm } from '../CommentForm'

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
  const { t } = useTranslation()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const openCommentFormHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setOpen(true)
  }

  return (
    <div className={styles.commentItem}>
      <CommentAvatar firstName={firstName} />

      <p className={styles.title}>
        {`${firstName} ${lastName}`}
        <span className={styles.date}>
          {formatToMonthName(date, router.locale || 'ru')}
        </span>
      </p>

      <p className={styles.text}>{text}</p>

      <div className={styles.voteContainer}>
        <button className={styles.button}>
          <Svg icon='thumbUp' />
        </button>
        <span className={styles.vote}>{like}</span>
        <button className={styles.button}>
          <Svg icon='thumbDown' />
        </button>
      </div>

      <button className={styles.answerButton} onClick={openCommentFormHandler}>
        {`${t('common:Answer')}`}
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
