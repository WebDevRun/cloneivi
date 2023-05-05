import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import { Button } from '@/ui/Button'
import { getProportionalImgWidth } from '@/utils/functions/getProportionalImgWidth'

import styles from './PersonFilmographyItem.module.scss'

export interface PersonFilmographyItemProps {
  id: string
}

const defaultFilm = {
  film_id: '984fdb2d-da0c-4e04-926a-f72f103c4ccb',
  name_ru: 'Зеленая миля',
  name_en: 'The Green Mile',
  description:
    'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
  year: 1999,
  country: 'США',
  rating: 9.1,
  assessments: 1328162,
  reviews: 475,
  age_limit: 16,
  duration: 189,
  img: '//avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450',
  trailers: [
    {
      trailer_id: 'fb853667-00a4-4b1a-bb7d-9fcea60cc1e1',
      trailer: 'https://www.kinopoisk.ru/film/435/video/13494/',
      img: '//avatars.mds.yandex.net/get-kino-vod-films-gallery/1668876/a345b127722243984f01ef6504c9a477/100x64_3',
      date: '16 июня 2009',
    },
  ],
}

export const PersonFilmographyItem: FC<PersonFilmographyItemProps> = ({
  id,
}) => {
  const [films, setFilms] = useState(defaultFilm)

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
            src={films.img ? `https:${films.img}` : 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e840ca57-354a-44bf-a282-53add07fd18c/300x450'}
            alt={''}
            width={getProportionalImgWidth(films.img, 75, 118)}
            height='118'
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
