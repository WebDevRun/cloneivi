import { FC } from 'react'

import { capitaliseArr } from '@/utils/functions'

import styles from './WatchDescription.module.scss'

export interface WatchDescriptionProps {
  description: string
  languagesAudio: string[]
  qualities: string[]
}

export const WatchDescription: FC<WatchDescriptionProps> = ({
  description,
  languagesAudio,
  qualities,
}) => {
  return (
    <div className={styles.watchDescription}>
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
      </div>
    </div>
  )
}
