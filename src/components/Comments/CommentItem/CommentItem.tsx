import { FC } from 'react'

import { CommentAvatar } from '../CommentAvatar'
import { CommentThumb } from '../CommentThumb'

import styles from './CommentItem.module.scss'

export interface CommentItemProps {
  date: string
  text: string
  vote: number
}

export const CommentItem: FC<CommentItemProps> = ({ date, text, vote }) => {
  return (
    <div className={styles.commentItem}>
      <CommentAvatar />

      <div className={styles.date}>{date}</div>
      <div className={styles.text}>{text}</div>

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
