import { FC } from 'react'

import styles from './MovieCard.module.scss'

export const MovieCard: FC = () => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.playerContainer}>
        <div className={styles.player}></div>
        <div className={styles.buttons}></div>
      </div>
      <div className={styles.aboutContainer}></div>
    </div>
  )
}
