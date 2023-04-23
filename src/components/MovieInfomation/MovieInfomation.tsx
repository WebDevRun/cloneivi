import Link from 'next/link'
import { FC } from 'react'

import styles from './MovieInfomation.module.scss'

export interface MovieInfomationProps {
  title: string
  productionYear: number
  seasonCount?: string
  duration: number
  ageRating: string
  countries: string[]
  genres: string[]
}

export const MovieInfomation: FC<MovieInfomationProps> = ({
  title,
  productionYear,
  seasonCount,
  duration,
  ageRating,
  countries,
  genres,
}) => {
  return (
    <div className={styles.movieInfomation}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.watchParams}>
        <div className={styles.paramList}>
          <Link className={styles.date} href="#">
            {productionYear}
          </Link>{' '}
          {seasonCount ? (
            <span className={styles.season}>{seasonCount} сезона</span>
          ) : (
            <span className={styles.duration}>{duration}</span>
          )}{' '}
          <span className={styles.ageRating}>{ageRating}</span>
        </div>
        <div className={styles.paramList}>
          {countries.map((country) => {
            return (
              <Link className={styles.country} key={country} href="#">
                {country}
              </Link>
            )
          })}
          {genres.map((genre) => {
            return (
              <Link className={styles.genre} href="#" key={genre}>
                {genre}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
