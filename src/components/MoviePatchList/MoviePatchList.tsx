import { useTranslation } from 'next-i18next'
import { FC, useState } from 'react'

import { useGetFilmsQuery } from '@/store/endpoints/films'

import { MovieForm } from './MovieForm'
import { MovieItem } from './MovieItem'
import styles from './MoviePatchList.module.scss'

export const MoviePatchList: FC = () => {
  const { t } = useTranslation(['adminPage'])
  const { data: initialMovies } = useGetFilmsQuery(20)
  const [movies, setMovies] = useState(initialMovies)

  return (
    <div className={styles.moviePatchList}>
      <MovieForm setData={setMovies} />
      {movies === undefined ? (
        <p>{`${t('adminPage:loading')}...`}</p>
      ) : movies.length === 0 ? (
        <p>{t('adminPage:notFound')}</p>
      ) : (
        <div className={styles.movieList}>
          {movies.map((movie) => {
            return (
              <MovieItem
                key={movie.film_id}
                id={movie.film_id}
                name_en={movie.name_en}
                name_ru={movie.name_ru}
                imgSrc={movie.img}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
