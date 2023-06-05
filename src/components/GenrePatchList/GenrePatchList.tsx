import { FC } from 'react'

import { useGetGenresQuery } from '@/store/endpoints/genres'

import { GenreForm } from './GenreForm'
import styles from './GenrePatchList.module.scss'

export const GenrePatchList: FC = () => {
  const { data: genres } = useGetGenresQuery()

  return (
    <div className={styles.genrePatchList}>
      {genres?.map((genre) => {
        return (
          <GenreForm
            key={genre.genre_id}
            id={genre.genre_id}
            initialRuText={genre.genre_ru}
            initialEnText={genre.genre_en}
          />
        )
      })}
    </div>
  )
}
