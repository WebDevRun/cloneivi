import { useTranslation } from 'next-i18next'
import { ChangeEventHandler, FC, useEffect, useState } from 'react'

import { useGetFilmsQuery } from '@/store/endpoints/films'
import { Input } from '@/ui/Input'

import { MovieForm } from './MovieForm'
import { MovieItem } from './MovieItem'
import styles from './MoviePatchList.module.scss'
import { useMoviePatchList } from './useMoviePatchList'
// admin/edit/[id]
export const MoviePatchList: FC = () => {
  const { t } = useTranslation(['adminPage'])
  const { data: initialMovies } = useGetFilmsQuery(20)
  const [movies, setMovies] = useState(initialMovies)
  // const { movies, setSearchText, searchText } = useMoviePatchList(initialMovies)

  useEffect(() => {
    console.log(movies)
  }, [movies])

  if (movies === undefined) return <p>Loading...</p>

  return (
    <div className={styles.moviePatchList}>
      <MovieForm setData={setMovies} />
      {/* <Input
        type='search'
        description={`${t('adminPage:findMovie')}:`}
        text={searchText}
        setText={setSearchText}
        placeholder={`${t('adminPage:find')}...`}
      /> */}
      {movies.length === 0 ? (
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
