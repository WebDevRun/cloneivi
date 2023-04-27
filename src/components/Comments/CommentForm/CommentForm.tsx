import { FC } from 'react'

import { CommentAvatar } from '../CommentAvatar'

import styles from './CommentForm.module.scss'

export const CommentForm: FC = () => {
  return (
    <form className={styles.commentForm}>
      <CommentAvatar />

      <label className={styles.label}>
        <input className={styles.input} type='text' />
        <p className={styles.placeholder}>Написать отзыв</p>
      </label>

      <button className={styles.button} type='submit'>
        Отправить
      </button>
    </form>
  )
}
