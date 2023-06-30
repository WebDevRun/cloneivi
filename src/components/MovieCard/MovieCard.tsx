import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { CSSProperties, FC, MouseEvent, useState } from 'react'

import { Button } from '@/ui/Button'
import { Svg } from '@/ui/Svg'
import noImage from '../../assets/images/no_image.jpg'

import styles from './MovieCard.module.scss'
import { MovieCardProperties } from './MovieCardProperties'

export interface MovieCardProps {
  href: string
  exclusive?: boolean
  buy?: 'subscription' | 'purchase'
  imgSrc: string
  imgAlt: string
  ageLimit?: string
  movieName?: string
  rating?: number
  year?: number
  genre?: string[]
  mode: 'small' | 'big' | 'series' | 'top10'
  seriesDescription?: string
  seriesLength?: string
  imgText?: string
  imgNum?: string[]
}

export const MovieCard: FC<MovieCardProps> = ({
  href,
  exclusive = false,
  buy = 'subscription',
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
  imgText,
  imgNum,
}) => {
  const { t } = useTranslation()
  const [favoriteIconActive, setFavoriteIconActive] = useState<boolean>(false)
  const [dislike, setDislike] = useState<boolean>(false)

  function addFavorite(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setFavoriteIconActive((prev) => !prev)
  }

  function addDislike(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setDislike((prev) => !prev)
  }

  const dislikeContent = {
    '--dislikeContent': `"${t('DontLikeThis')}"`,
  } as CSSProperties

  const ratingContent = {
    '--ratingContent': `"${t('AlreadyWatchedEvaluate')}"`,
  } as CSSProperties

  const similarContent = {
    '--similarContent': `"${t('Similar')}"`,
  } as CSSProperties

  const favoriteContent = {
    '--favoriteContent': `"${t('WatchLater')}"`,
  } as CSSProperties

  let sizes = ['300', '450']
  if (imgSrc) {
    const splitImgSrc = imgSrc.split('/').at(-2)
    sizes = splitImgSrc ? splitImgSrc.split('x') : sizes
  }
  const width = parseInt(sizes[0])
  const height = parseInt(sizes[1])

  return (
    <Link href={href} className={cn(styles.movieCard, styles[mode])}>
      <div className={styles.movieCardImageCont}>
        <div
          className={styles.movieCardBackground}
          style={
            mode == 'small' || mode == 'top10'
              ? {
                  background: `url(${
                    imgSrc
                      ? imgSrc
                      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png'
                  }) center/cover no-repeat`,
                }
              : { display: 'none' }
          }
        ></div>
        {mode !== 'small' && mode !== 'top10' && (
          <Image
            width={width}
            height={height}
            className={styles.movieCardImage}
            src={imgSrc}
            alt={imgAlt}
          />
        )}
        {mode === 'top10' && (
          <>
            <div
              className={styles.nameImage}
              style={{ position: 'absolute', width: '176px', height: '61px' }}
            >
              <Image
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                alt=''
                fill
                src={imgText as string}
              />
            </div>
            {imgNum?.map((num, index, arr) => (
              <Image
                key={index}
                style={{
                  transform: `translateX(calc(-50% + ${index * 35}px))`,
                  left: `calc(50% - ${(arr.length - 1) * (35 / 2)}px)`,
                }}
                className={styles.numberImage}
                alt=''
                width={48}
                height={66}
                src={num as string}
              />
            ))}
          </>
        )}
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
            {exclusive && (
              <div className={styles.textBadge}>{t('Exclusive')}</div>
            )}
            <div className={styles.movieInfo}>
              <div className={styles.hoards}>
                <button
                  style={favoriteContent}
                  className={cn(styles.iconBtn, styles.favoriteBtn)}
                  onClick={addFavorite}
                >
                  {favoriteIconActive ? (
                    <Svg icon='favoriteRemove' />
                  ) : (
                    <Svg icon='favoriteAdd' />
                  )}
                </button>
                <button
                  style={similarContent}
                  className={cn(styles.iconBtn, styles.similarBtn)}
                >
                  <Svg icon='similar' />
                </button>
                <button
                  style={ratingContent}
                  className={cn(styles.iconBtn, styles.ratingBtn)}
                >
                  <Svg icon='rating' />
                </button>
                <button
                  style={dislikeContent}
                  className={styles.dislikeBtn}
                  onClick={addDislike}
                >
                  <Svg icon='dislike' fill={dislike ? 'red' : 'white'} />
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
          <p
            style={
              buy === 'subscription'
                ? { color: '#ea003d' }
                : { color: '#00a5ff' }
            }
            className={styles.movieCardType}
          >
            {buy === 'subscription' ? t('Subscription') : t('Purchase')}
          </p>
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
