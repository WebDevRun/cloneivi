import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { capitaliseArr } from '@/utils/functions'

import { Medallions, IPerson } from '../Medallions'
import { MovieQuality } from '../MovieQuality'

import styles from './MovieDescription.module.scss'

export interface MovieDescriptionProps {
  isClose: boolean
  description: string
  languagesAudio: string[]
  qualities: string[]
  persons: IPerson[]
  rating: number
}

export const MovieDescription: FC<MovieDescriptionProps> = ({
  isClose,
  description,
  languagesAudio,
  qualities,
  persons,
  rating,
}) => {
  const { t } = useTranslation(['movieInfomation'])

  return (
    <div
      style={{
        height: isClose ? 184 : undefined,
      }}
      className={styles.movieDescription}
    >
      <div className={styles.medallions}>
        <Medallions rating={rating} persons={persons} />
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.options}>
        <div className={styles.languageContainer}>
          <p className={styles.languageText}>
            {t('movieInfomation:languages')}
          </p>
          <p className={styles.languages}>
            {capitaliseArr(languagesAudio).join(', ')}
          </p>
        </div>

        <p className={styles.disclaimerContainer}>
          {`${t('movieInfomation:imageAndSound')}.`}
          <span className={styles.disclaimer}>
            {` ${t('movieInfomation:actualQuality')}.`}
          </span>
        </p>

        <div className={styles.qualitiesContainer}>
          {qualities.map((quality) => {
            return <MovieQuality key={quality} quality={quality} />
          })}
        </div>
      </div>
    </div>
  )
}
