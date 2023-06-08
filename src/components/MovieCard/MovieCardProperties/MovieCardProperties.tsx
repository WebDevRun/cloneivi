import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import styles from './MovieCardProperties.module.scss'

interface IMovieCardProperties {
  rating?: number
  year?: number
  genre?: string[]
}

export const MovieCardProperties: FC<IMovieCardProperties> = ({
  rating,
  genre,
  year,
}) => {
  const { t } = useTranslation()
  const ratings = ['40%', '20%', '70%', '50%']
  
  return (
    <>
      <div className={styles.movieProperties}>
        <div className={styles.propertiesRow}>
          <div className={styles.rating}>
            <div className={styles.ratingValue}>{rating}</div>
            <div className={styles.ratingGraph}>
              {ratings.map((rating, index) => (
                <div key={index} className={styles.progress}>
                  <div
                    style={{ width: rating }}
                    className={styles.progressBar}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.propertiesRow}>
          <div className={styles.barChart}>
            <div className={styles.barChartName}>{t('Story')}</div>
            <div className={styles.progress}>
              <div
                style={{ width: '23%' }}
                className={styles.progressBar}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.propertiesInfo}>
          <div className={styles.propertiesRow}>
            {year}, {genre?.join(', ')}
          </div>
        </div>
      </div>
    </>
  )
}
