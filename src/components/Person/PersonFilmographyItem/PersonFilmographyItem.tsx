import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import { Button } from '@/ui/Button'

import styles from './PersonFilmographyItem.module.scss'

export interface PersonFilmographyItemProps {
  id: string
}

export const PersonFilmographyItem: FC<PersonFilmographyItemProps> = ({
  id,
}) => {
  const [films, setFilms] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/films/${id}`)
      const data = await response.json()
      setFilms(data)
    }
    fetchData()
  }, [id])

  return (
    <div className={styles.personFilmographyItem}>
      <Link href={`http://localhost:4000/films/${id}`} className={styles.body}>
        <div className={styles.figure}>
          <Image
            className={styles.image}
            src='https://thumbs.dfs.ivi.ru/storage23/contents/e/5/083ebacbcddba0f89bb4e89d9f64ef.jpg/172x264/?q=85'
            alt={''}
            width='120'
            height='144'
          />
        </div>
        <div className={styles.main}>
          <div className={styles.info}>
            <div className={styles.year}>{films.year}</div>
            <div
              className={styles.title}
              title='Человек-Паук: Через вселенные 2'
            >
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