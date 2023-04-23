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
      {/* <div className={styles.watchParams}>
        <div className={styles.paramList}>
          <Link className={styles.date} href="#">
            {productionYear}
          </Link>
          {season ? (
            <span className={styles.season}>{season}</span>
          ) : (
            <span className={styles.duration}>
              {setDescriptions(formatTime(duration, '00:00'), 'hh:mm', 'ru')}
            </span>
          )}
          <span className={styles.ageRating}>{ageRating}</span>
        </div>

        <div className={cn(styles.paramList, styles.withBetweenPoints)}>
          {countries.map((country) => {
            return (
              <span key={country}>
                <Link className={styles.country} href="#">
                  {country}
                </Link>
              </span>
            )
          })}
          {genres.map((genre) => {
            return (
              <span key={genre}>
                <Link className={styles.genre} href="#">
                  {genre}
                </Link>
              </span>
            )
          })}
        </div>

        <div className={styles.paramList}>
          <span className={styles.quality}>{quality}</span>
          <div className={styles.volumeContainer}>
            <Image className={styles.volume} src={volume} alt="volume" />
          </div>
          <div className={cn(styles.paramList, styles.withBetweenPoints)}>
            {translations.map((translation) => {
              return (
                <span className={styles.translation} key={translation}>
                  {translation}
                </span>
              )
            })}
          </div>
        </div>
      </div> */}
    </div>
  )
}
