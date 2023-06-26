import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { capitaliseArr } from '@/utils/functions'

import { IPerson } from '../Medallions'
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
}) => {
  const { t } = useTranslation()

  return (
    <div
      style={{
        height: isClose ? 184 : undefined,
      }}
      className={styles.movieDescription}
    >
      <p className={styles.description}>{description}</p>

      <div className={styles.options}>
        <div className={styles.languageContainer}>
          <p className={styles.languageText}>
            {t('Languages')}
          </p>
          <p className={styles.languages}>
            {capitaliseArr(languagesAudio).join(', ')}
          </p>
        </div>

        <p className={styles.disclaimerContainer}>
          {`${t('ImageAndSound')}.`}
          <span className={styles.disclaimer}>
            {` ${t('ActualQuality')}.`}
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
