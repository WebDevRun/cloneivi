import cn from 'classnames'
import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './MovieCard.module.scss'

import DislikeIcon from '@/assets/images/common/DislikeIcon'
import FavoriteIcon from '@/assets/images/common/FavoriteIcon'
import FavoriteRemoveIcon from '@/assets/images/common/FavoriteRemoveIcon'
import RatingIcon from '@/assets/images/common/RatingIcon'
import SimilarIcon from '@/assets/images/common/SimilarIcon'
import { Button } from '@/ui/Button'

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
}) => {
  const ratings = ['40%', '20%', '70%', '50%']

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
        <img className={styles.movieCardImage} src={imgSrc} alt={imgAlt} />
        <div className={styles.ageBadge}>{ageLimit}</div>
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
                {favoriteIconActive ? (
                  <FavoriteRemoveIcon onClick={addFavorite} fill='white' />
                ) : (
                  <FavoriteIcon onClick={addFavorite} fill='white' />
                )}
                <SimilarIcon fill='white' />
                <RatingIcon fill='white' />
                <DislikeIcon
                  onClick={addDislike}
                  fill={dislike ? 'red' : 'white'}
                />
              </div>
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
                    <div className={styles.barChartName}>Сюжет</div>
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
    </Link>
  )
}
