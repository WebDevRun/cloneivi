import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { useGetGenresQuery } from '@/store/endpoints/genres'

import { GenreForm } from './GenreForm'
import styles from './GenrePatchList.module.scss'

export const GenrePatchList: FC = () => {
  const { t } = useTranslation(['adminPage'])
  const { data: genres } = useGetGenresQuery()

  return (
    <div className={styles.genrePatchList}>
      {genres === undefined ? (
        <p>{`${t('adminPage:loading')}...`}</p>
      ) : (
        genres.map((genre) => {
          return (
            <GenreForm
              key={genre.genre_id}
              id={genre.genre_id}
              initialRuText={genre.genre_ru}
              initialEnText={genre.genre_en}
            />
          )
        })
      )}
    </div>
  )
}
