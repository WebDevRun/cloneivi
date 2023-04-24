import { FC } from 'react'

import { WatchParams } from '@/ui/WatchParams'

import styles from './MovieInfomation.module.scss'

export interface MovieInfomationProps {
  title: string
  productionYear: number
  season?: string
  duration: number
  ageRating: string
  countries: string[]
  genres: string[]
  quality: string
}

export const MovieInfomation: FC<MovieInfomationProps> = ({
  title,
  productionYear,
  season,
  duration,
  ageRating,
  countries,
  genres,
  quality,
}) => {
  return (
    <div className={styles.movieInfomation}>
      <h1 className={styles.title}>{title}</h1>
      <WatchParams
        productionYear={productionYear}
        duration={duration}
        ageRating={ageRating}
        countries={countries}
        season={season}
        genres={genres}
        quality={quality}
      />
    </div>
  )
}
