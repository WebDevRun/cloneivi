import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { useGetFilmByIdQuery } from '@/store/endpoints/films'
import { MoviePlayer } from '@/ui/MoviePlayer'

import { WatchAllDevices } from '../WatchAllDevices'

import styles from './Movie.module.scss'

export const Movie: FC = () => {
  const { t } = useTranslation(['common'])
  const router = useRouter()
  const { data: movie } = useGetFilmByIdQuery(router.query.id as string)

  if (movie === undefined) return <p>{`${t('common:search')}...`}</p>

  return (
    <div className={styles.movie}>
      <section>
        <MoviePlayer
          name={router.locale === 'ru' ? movie.name_ru : movie.name_en}
          videoSrc='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
          posterSrc={movie.img}
        />
      </section>

      <section>
        <WatchAllDevices
          name={router.locale === 'ru' ? movie.name_ru : movie.name_en}
          poster={movie.img}
        />
      </section>
    </div>
  )
}
