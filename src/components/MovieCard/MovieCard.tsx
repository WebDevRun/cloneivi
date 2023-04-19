import Link from 'next/link'
import { FC, useState } from 'react'

import DislikeIcon from '@/assets/images/common/DislikeIcon'
import FavoriteIcon from '@/assets/images/common/FavoriteIcon'
import FavoriteRemoveIcon from '@/assets/images/common/FavoriteRemoveIcon'
import RatingIcon from '@/assets/images/common/RatingIcon'
import SimilarIcon from '@/assets/images/common/SimilarIcon'

import styles from './MovieCard.module.scss'

export interface MovieCardProps {
  href: string
  imgSrc: string
  imgAlt: string
  ageLimit: number
  movieName: string
  properties: {
    rating: string
    year: string
    genre?: string
    seasons: number
  }
}

export const MovieCard: FC<MovieCardProps> = ({
  href,
  imgAlt,
  imgSrc,
  ageLimit,
  movieName,
  properties,
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
    <Link href={href} className={styles.movieCard}>
      <div className={styles.movieCardImageCont}>
        <img className={styles.movieCardImage} src={imgSrc} alt={imgAlt} />
        <div className={styles.textBadge}>эксклюзив</div>
        <div className={styles.ageBadge}>{ageLimit}+</div>

        <div className={styles.movieInfo}>
          <div className={styles.hoards}>
            {favoriteIconActive ? (
              <FavoriteRemoveIcon onClick={addFavorite} fill="white" />
            ) : (
              <FavoriteIcon onClick={addFavorite} fill="white" />
            )}
            <SimilarIcon fill="white" />
            <RatingIcon fill="white" />
            <DislikeIcon onClick={addDislike} fill={dislike ? "red" : 'white'} />
          </div>
          <div className={styles.movieProperties}>
            <div className={styles.propertiesRow}>
              <div className={styles.rating}>
                <div className={styles.ratingValue}>{properties.rating}</div>
                <div className={styles.ratingGraph}>
                  <div className={styles.progress}>
                    <div
                      style={{ width: '50%' }}
                      className={styles.progressBar}
                    ></div>
                  </div>
                  <div className={styles.progress}>
                    <div
                      style={{ width: '30%' }}
                      className={styles.progressBar}
                    ></div>
                  </div>
                  <div className={styles.progress}>
                    <div
                      style={{ width: '70%' }}
                      className={styles.progressBar}
                    ></div>
                  </div>
                  <div className={styles.progress}>
                    <div
                      style={{ width: '40%' }}
                      className={styles.progressBar}
                    ></div>
                  </div>
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
                {properties.year}, {properties.genre}
              </div>
              <div className={styles.propertiesRow}>
                {properties.seasons} сезон
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.movieCardInfo}>
        <p className={styles.movieCardName}>{movieName}</p>
        <p className={styles.movieCardType}>Подписка</p>
      </div>
    </Link>
  )
}
