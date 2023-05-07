import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import { Button } from '@/ui/Button'
import { getProportionalImgWidth } from '@/utils/functions/getProportionalImgWidth'

import defaultData from './data_mock.json'
import styles from './PersonFilmographyItem.module.scss'

export interface PersonFilmographyItemProps {
  id: string
  pathDataSrc: string
}

export const PersonFilmographyItem: FC<PersonFilmographyItemProps> = ({
  id,
  pathDataSrc = defaultData,
}) => {
  const [films, setFilms] = useState(defaultData)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${pathDataSrc}${id}`)

      const data = await response.json()
      setFilms(data)
    }

    fetchData()
  }, [id, pathDataSrc])

  return (
    <div className={styles.personFilmographyItem}>
      <Link href={`${pathDataSrc}${id}`} className={styles.body}>
        <div className={styles.figure}>
          <Image
            className={styles.image}
            src={films.img ? `https:${films.img}` : `https:${defaultData.img}`}
            alt={`Постер для фильма ${films.name_ru}`}
            width={getProportionalImgWidth(films.img, 75, 118)}
            height='118'
          />
        </div>
        <div className={styles.main}>
          <div className={styles.info}>
            <div className={styles.year}>{films.year}</div>
            <div className={styles.title} title={films.name_ru}>
              {films.name_ru}
            </div>
            <div className={styles.rating}>
              <span className={styles.ratingLabel}>Рейтинг Иви:</span>
              <span className={styles.ratingValue}>
                <span className={styles.ratingValueInteger}>
                  {films.rating}
                </span>
              </span>
            </div>
          </div>
          <div className={styles.action}>
            <Button text='Подробнее' background='gray' />
          </div>
        </div>
      </Link>
    </div>
  )
}
