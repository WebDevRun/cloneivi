import { useRouter } from 'next/router'
import { FC } from 'react'

import { formatToMonthName } from '@/utils/functions/formatToMonthName'

import { CommentAvatar } from '../CommentAvatar'
import { CommentThumb } from '../CommentThumb'

import styles from './CommentItem.module.scss'

interface IProfile {
  first_name: string
  last_name: string
}

interface IUser {
  profile: IProfile
}
export interface CommentItemProps {
  date: string
  text: string
  vote: number
  user: IUser
}

export const CommentItem: FC<CommentItemProps> = ({
  date,
  text,
  vote,
  user,
}) => {
  const router = useRouter()

  return (
    <div className={styles.commentItem}>
      <CommentAvatar name={user.profile.first_name} />

      <p
        className={styles.name}
      >{`${user.profile.first_name} ${user.profile.last_name}`}</p>
      <p className={styles.date}>
        {formatToMonthName(date, router.locale || 'ru')}
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
