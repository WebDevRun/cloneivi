import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { formatTime, setDescriptions } from '@/utils/functions/formatTime'
import volume from '@assets/images/player/volume-mid.svg'

import { MovieQuality } from '../MovieQuality'

import styles from './MovieParams.module.scss'

const translations = ['Rus', 'Eng']

export interface MovieParamsProps {
  productionYear: number
  duration: number
  ageRating: string
  countries: string[]
  genres: string[]
  quality: string
}

export const MovieParams: FC<MovieParamsProps> = ({
  productionYear,
  duration,
  ageRating,
  countries,
  genres,
  quality,
}) => {
  const router = useRouter()

  return (
    <div className={styles.watchParams}>
      <div className={styles.paramList}>
        <Link className={styles.date} href='#'>
          {productionYear}
        </Link>
        <span className={styles.duration}>
          {setDescriptions(
            formatTime(duration, '00:00'),
            'hh:mm',
            router.locale || 'ru',
          )}
        </span>
        <span className={styles.ageRating}>{ageRating}</span>
      </div>

      <div className={cn(styles.paramList, styles.withBetweenPoints)}>
        {countries.map((country) => {
          return (
            <span key={country}>
              <Link className={styles.country} href='#'>
                {country}
              </Link>
            </span>
          )
        })}
        {genres.map((genre) => {
          return (
            <span key={genre}>
              <Link className={styles.genre} href='#'>
                {genre}
              </Link>
            </span>
          )
        })}
      </div>

      <div className={styles.paramList}>
        <MovieQuality quality={quality} />
        <div className={styles.volumeContainer}>
          <Image className={styles.volume} src={volume} alt='volume' />
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
    </div>
  )
}
