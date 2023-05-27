import { FC } from 'react'

import { IGenre } from '@/types/Movie'

import { GenreForm } from './GenreForm'
import styles from './GenrePatchList.module.scss'

export interface GenrePatchListProps {
  genres: IGenre[]
}

export const GenrePatchList: FC<GenrePatchListProps> = ({ genres }) => {
  return (
    <div className={styles.genrePatchList}>
      {genres.map((genre) => {
        return (
          <GenreForm
            key={genre.genre_id}
            initialRuText={genre.genre_ru}
            initialEnText={genre.genre_en}
          />
        )
      })}
    </div>
  )
}
