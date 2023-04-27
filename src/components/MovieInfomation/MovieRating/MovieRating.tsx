import { FC } from 'react'

import styles from './MovieRating.module.scss'

export interface MovieRatingProps {
  rating: number
}

export const MovieRating: FC<MovieRatingProps> = ({ rating }) => {
  return (
    <div className={styles.movieRating}>
      <div className={styles.valueContainer}>
        <p className={styles.value}>{rating}</p>
      </div>
      <div className={styles.text}>Рейтинг кинопоиска</div>
      <button className={styles.button}>Оценить</button>
    </div>
  )
}
