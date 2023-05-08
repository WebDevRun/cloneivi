import { FC } from 'react'

import { formatToMonthName } from '@/utils/functions/formatToMonthName'

import { CommentAvatar } from '../CommentAvatar'
import { CommentThumb } from '../CommentThumb'

import styles from './CommentItem.module.scss'

export interface CommentItemProps {
  date: string
  text: string
  vote: number
  firstName: string
  lastName: string
}

export const CommentItem: FC<CommentItemProps> = ({
  date,
  text,
  vote,
  firstName,
  lastName,
}) => {
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

      <button className={styles.answerButton}>Ответить</button>
    </div>
  )
}
