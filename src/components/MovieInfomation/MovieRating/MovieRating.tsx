import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { Button } from '@/ui/Button'

import styles from './MovieRating.module.scss'

export interface MovieRatingProps {
  rating: number
}

export const MovieRating: FC<MovieRatingProps> = ({ rating }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.movieRating}>
      <div className={styles.valueContainer}>
        <p className={styles.value}>{rating}</p>
      </div>
      <div className={styles.text}>{t('KinopoiskRating')}</div>
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => {}}
          text={`${t('Estimate')}`}
          withBorder='borderSm'
        />
      </div>
    </div>
  )
}
