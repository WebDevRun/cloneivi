import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { FC, useEffect, useState } from 'react'

import { IFilm } from '@/types/Person'
import { Button } from '@/ui/Button'

import noImage from '../../../assets/images/no_image.jpg'

import initData from './data_mock.json'
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

  const [films, setFilms] = useState<IFilm>(initData)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${pathDataSrc}${id}`)

      const data = await response.json()
      setFilms(data)
    }

    fetchData()
  }, [id, pathDataSrc])

  const isSvg = films.img
    ? films.img.split('/').at(-1)?.split('.').at(-1) === 'svg'
      ? true
      : false
    : false

  return (
    <div className={styles.personFilmographyItem}>
      <Link href={`${pathDataSrc}${id}`} className={styles.body}>
        <div className={styles.figure}>
          {!isSvg && (
            <Image
              className={styles.image}
              src={
                films.img
                  ? films.img.indexOf('https://') === -1
                    ? `https:${films.img}`
                    : films.img
                  : noImage
              }
              alt={`${t('posterForTheMovie')} ${films.name_ru}`}
              width={75}
              height={118}
            />
          )}
          {isSvg && (
            <Image
              className={styles.image}
              src={films.img ? `${films.img}` : noImage}
              alt={`${t('posterForTheMovie')} ${films.name_ru}`}
              width={75}
              height={118}
            />
          )}
        </div>
        <div className={styles.main}>
          <div className={styles.info}>
            <div className={styles.year}>{films.year}</div>
            <div className={styles.title} title={films.name_ru}>
              {films.name_ru}
            </div>
            <div className={styles.rating}>
              <span className={styles.ratingLabel}>{t('IviRating')}:</span>
              <span className={styles.ratingValue}>
                <span className={styles.ratingValueInteger}>
                  {films.rating}
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
