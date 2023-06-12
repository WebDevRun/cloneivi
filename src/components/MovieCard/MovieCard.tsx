import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { FC, useState } from 'react'

import { Button } from '@/ui/Button'
import { Svg } from '@/ui/Svg'

import styles from './MovieCard.module.scss'
import { MovieCardProperties } from './MovieCardProperties'

export interface MovieCardProps {
  href: string
  imgSrc: string
  imgAlt: string
  ageLimit?: string
  movieName?: string
  rating?: number
  year?: number
  genre?: string[]
  mode: 'small' | 'big' | 'series'
  seriesDescription?: string
  seriesLength?: string
}

export const MovieCard: FC<MovieCardProps> = ({
  href,
  imgAlt,
  imgSrc,
  ageLimit,
  movieName,
  rating,
  year,
  genre,
  mode = 'small',
  seriesDescription,
  seriesLength,
}) => {
  const { t } = useTranslation()
  const [favoriteIconActive, setFavoriteIconActive] = useState<boolean>(false)
  const [dislike, setDislike] = useState<boolean>(false)

  function addFavorite() {
    setFavoriteIconActive((prev) => !prev)
  }

  function addDislike() {
    setDislike((prev) => !prev)
  }

  return (
    <Link href={href} className={cn(styles.movieCard, styles[mode])}>
      <div
        className={styles.movieCardImageCont}
        style={{ background: `url(${imgSrc}) center/contain no-repeat` }}
      >
        {ageLimit && <div className={styles.ageBadge}>{ageLimit}</div>}
        {mode === 'big' && (
          <div className={styles.btnCont}>
            <Button
              onClick={() => {}}
              size='middle'
              text={`${t('watchSubscription')}`} 
            />
          </div>
        )}

        {mode === 'small' && (
          <>
            <div className={styles.textBadge}>{t('Exclusive')}</div>
            <div className={styles.movieInfo}>
              <div className={styles.hoards}>
                <button className={styles.iconBtn} onClick={addFavorite}>
                  {favoriteIconActive ? (
                    <Svg icon='favoriteRemove' />
                  ) : (
                    <Svg icon='favoriteAdd' />
                  )}
                </button>
                <button className={styles.iconBtn}>
                  <Svg icon='similar' />
                </button>
                <button className={styles.iconBtn}>
                  <Svg icon='rating' />
                </button>
                <button className={styles.dislikeBtn} onClick={addDislike}>
                  <Svg
                    icon='dislike'
                    fill={dislike ? 'red' : 'white'}
                    ext={true}
                  />
                </button>
              </div>
              <MovieCardProperties rating={rating} year={year} genre={genre} />
            </div>
          </>
        )}
      </div>
      {mode === 'small' && (
        <div className={styles.movieCardInfo}>
          <p className={styles.movieCardName}>{movieName}</p>
          <p className={styles.movieCardType}>{t('Subscription')}</p>
        </div>
      )}
      {mode === 'series' && (
        <div className={styles.seriesInfo}>
          <p className={styles.seriesName}>{movieName}</p>
          <p className={styles.seriesDescription}>{seriesDescription}</p>
          <p className={styles.seriesLength}>{seriesLength}</p>
        </div>
      )}
    </Link>
  )
}
