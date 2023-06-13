import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { FC, useEffect, useRef, useState } from 'react'

import { useGetFilmByIdQuery, useGetFilmsQuery } from '@/store/endpoints/films'
import { IconInText } from '@/ui/IconInText'
import { MoviePlayer } from '@/ui/MoviePlayer'
import { iMovieToSliderProps } from '@/utils/functions/iMovieToSliderProps'

import { MovieCard } from '../MovieCard'
import { Slider } from '../Slider'
import { WatchAllDevices } from '../WatchAllDevices'

import styles from './Movie.module.scss'

interface ISliderMovie {
  id: string
  genre: string[]
  year: string
  imgSrc: string
  movieName: string
  rating: number
  href: string
  ageLimit: string
}

export const Movie: FC = () => {
  const { t } = useTranslation(['common'])
  const router = useRouter()
  const { data: movie } = useGetFilmByIdQuery(router.query.id as string)
  const { data: movies } = useGetFilmsQuery(20)
  const [recommendMovies, setRecommendMovies] = useState<ISliderMovie[]>()

  useEffect(() => {
    if (movies !== undefined) {
      const moviesData = iMovieToSliderProps(movies, router.locale || 'ru')

      setRecommendMovies(moviesData)
    }
  }, [movies, router.locale])

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

      {recommendMovies && (
        <section>
          <IconInText
            className={styles.recommendedFilms}
            text={`${t('WatchWithFilm', {
              film_name: router.locale === 'ru' ? movie.name_ru : movie.name_en,
            })}`}
            extIcon
            orderIcon='before'
          />
          <Slider
            Component={MovieCard}
            arrowSize='big'
            componentSetting={{
              style: 'fill',
              type: 'square',
              imgAlt: 'Movie Image',
              mode: 'small',
            }}
            isCrop={true}
            type='list'
            items={recommendMovies}
            onItemClick={() => {}}
          />
        </section>
      )}

      <section>
        <WatchAllDevices
          name={router.locale === 'ru' ? movie.name_ru : movie.name_en}
          poster={movie.img}
        />
      </section>
    </div>
  )
}
