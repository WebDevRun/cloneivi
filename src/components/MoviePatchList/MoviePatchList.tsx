import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { IMovie } from '@/types/Movie'
import { Input } from '@/ui/Input'

import { MovieItem } from './MovieItem'
import styles from './MoviePatchList.module.scss'
import { useMoviePatchList } from './useMoviePatchList'

export interface MoviePatchListProps {
  initialMovies: IMovie[]
}

export const MoviePatchList: FC<MoviePatchListProps> = ({ initialMovies }) => {
  const { t } = useTranslation(['adminPage'])
  const { movies, searchText, setSearchText } = useMoviePatchList(initialMovies)

  return (
    <div className={styles.moviePatchList}>
      <Input
        description={`${t('adminPage:findMovie')}`}
        text={searchText}
        setText={setSearchText}
        placeholder={`${t('adminPage:find')}...`}
      />
      {movies.length === 0 ? (
        <p>{t('adminPage:notFound')}</p>
      ) : (
        <div className={styles.movieList}>
          {movies.map((movie) => {
            return (
              <MovieItem
                key={movie.film_id}
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
