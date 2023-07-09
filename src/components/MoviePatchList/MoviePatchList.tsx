import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import {
  useGetFilmsQuery,
  useLazyGetFilmsByNameQuery,
} from '@/store/endpoints/films'

import { MovieForm } from './MovieForm'
import { MovieItem } from './MovieItem'
import styles from './MoviePatchList.module.scss'

export const MoviePatchList: FC = () => {
  const { t } = useTranslation()
  const { data: initialMovies } = useGetFilmsQuery(20)
  const [setName, { data: movies }] = useLazyGetFilmsByNameQuery()

  return (
    <div className={styles.moviePatchList}>
      <MovieForm setData={setName} />
      {movies === undefined ? (
        initialMovies?.map((movie) => {
          return (
            <MovieItem
              key={movie.film_id}
              id={movie.film_id}
              name_en={movie.name_en}
              name_ru={movie.name_ru}
              imgSrc={movie.img}
            />
          )
        })
      ) : movies.length === 0 ? (
        <p>{t('notFound')}</p>
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
