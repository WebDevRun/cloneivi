import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './MovieCard.module.scss'
import { MovieCardProperties } from './MovieCardProperties'

import DislikeIcon from '@/assets/images/common/DislikeIcon'
import FavoriteIcon from '@/assets/images/common/FavoriteIcon'
import FavoriteRemoveIcon from '@/assets/images/common/FavoriteRemoveIcon'
import RatingIcon from '@/assets/images/common/RatingIcon'
import SimilarIcon from '@/assets/images/common/SimilarIcon'
import { Button } from '@/ui/Button'
import { Svg } from '@/ui/Svg'

export interface MovieCardProps {
  href: string
  imgSrc: string
  imgAlt: string
  ageLimit?: string
  movieName?: string
  rating?: number
  year?: number
  genre?: string[]
  mode: string
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
  mode,
  seriesDescription,
  seriesLength
}) => {
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
      <div className={styles.movieCardImageCont}>
        <Image
          width={234}
          height={360}
          className={styles.movieCardImage}
          src={imgSrc}
          alt={imgAlt}
        />
        {ageLimit && <div className={styles.ageBadge}>{ageLimit}</div>}
        {mode === 'big' && (
          <div className={styles.btnCont}>
            <Button
              onClick={() => {}}
              size='middle'
              text='Смотреть по подписке'
            />
          </div>
        )}

        {mode === 'small' && (
          <>
            <div className={styles.textBadge}>эксклюзив</div>
            <div className={styles.movieInfo}>
              <div className={styles.hoards}>
                <button className={styles.favoriteBtn} onClick={addFavorite}>
                  {favoriteIconActive ? (
                    <FavoriteRemoveIcon fill='white' />
                  ) : (
                    <FavoriteIcon fill='white' />
                  )}
                </button>
                <SimilarIcon fill='white' />
                <RatingIcon fill='white' />
                <button className={styles.dislikeBtn} onClick={addDislike}>
                  <Svg icon='dislike' fill={dislike ? 'red' : 'white'}/>
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
          <p className={styles.movieCardType}>Подписка</p>
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
