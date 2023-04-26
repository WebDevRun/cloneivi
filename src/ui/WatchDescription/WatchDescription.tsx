import { FC, useRef } from 'react'

import { capitaliseArr } from '@/utils/functions'

import { MovieQuality } from '../MovieQuality'

import styles from './WatchDescription.module.scss'

export interface WatchDescriptionProps {
  isClose: boolean
  description: string
  languagesAudio: string[]
  qualities: string[]
}

export const WatchDescription: FC<WatchDescriptionProps> = ({
  isClose,
  description,
  languagesAudio,
  qualities,
}) => {
  return (
    <div
      style={{
        height: isClose ? 88 : undefined,
      }}
      className={styles.watchDescription}
    >
      <p className={styles.description}>{description}</p>

      <div className={styles.options}>
        <div className={styles.languageContainer}>
          <p className={styles.languageText}>Языки</p>
          <p className={styles.languages}>
            {capitaliseArr(languagesAudio).join(', ')}
          </p>
        </div>

        <p className={styles.disclaimerContainer}>
          Изображение и звук.
          <span className={styles.disclaimer}>
            {' '}
            Фактическое качество зависит от устройства и ограничений
            правообладателя.
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
