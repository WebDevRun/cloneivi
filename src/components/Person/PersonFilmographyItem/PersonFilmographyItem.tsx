import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { useGetFilmByIdQuery } from '@/store/endpoints/films'
import { IMovie } from '@/types/movie'
import { Button } from '@/ui/Button'
import { isSvg } from '@/utils/functions/isSvg'

import noImage from '../../../assets/images/no_image.jpg'

import styles from './PersonFilmographyItem.module.scss'

export interface PersonFilmographyItemProps {
  id: string
  pathDataSrc: string
}

export const PersonFilmographyItem: FC<PersonFilmographyItemProps> = ({
  id,
  pathDataSrc,
}) => {
  const { t } = useTranslation()
  const { locale } = useRouter()

  const filmData = useGetFilmByIdQuery(id)
  const film = filmData.data as IMovie

  return (
    <div className={styles.personFilmographyItem}>
      <Link href={`${pathDataSrc}${id}`} className={styles.body}>
        <div className={styles.figure}>
          {!isSvg(film?.img) && (
            <Image
              className={styles.image}
              src={
                film?.img
                  ? film.img.indexOf('https://') === -1
                    ? `https:${film.img}`
                    : film.img
                  : noImage
              }
              alt={`${t('posterForTheMovie')} ${film?.name_ru}`}
              width={75}
              height={118}
            />
          )}
          {isSvg(film?.img) && (
            <Image
              className={styles.image}
              src={film.img ? `${film.img}` : noImage}
              alt={`${t('posterForTheMovie')} ${film.name_ru}`}
              width={75}
              height={118}
            />
          )}
        </div>
        <div className={styles.main}>
          <div className={styles.info}>
            <div className={styles.year}>{film?.year}</div>
            <div className={styles.title} title={film?.name_ru}>
              {locale === 'ru' ? film?.name_ru : film?.name_en}
            </div>
            <div className={styles.rating}>
              <span className={styles.ratingLabel}>{t('IviRating')}:</span>
              <span className={styles.ratingValue}>
                <span className={styles.ratingValueInteger}>
                  {film?.rating}
                </span>
              </span>
            </div>
          </div>
          <div className={styles.action}>
            <Button text={`${t('seeMore')}`} background='gray' />
          </div>
        </div>
      </Link>
    </div>
  )
}
