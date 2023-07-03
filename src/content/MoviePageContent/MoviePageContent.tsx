import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { Badge } from '@/components/Badge'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { GalleryPersons } from '@/components/GalleryPersons'
import { MovieCard } from '@/components/MovieCard'
import { MovieInfomation } from '@/components/MovieInfomation'
import { IPerson } from '@/components/MovieInfomation/Medallions'
import { Slider } from '@/components/Slider'
import { WatchAllDevices } from '@/components/WatchAllDevices'
import { useGetFilmByIdQuery } from '@/store/endpoints/films'
import { IGenre, IMovie } from '@/types/movie'
import { LinkBtn } from '@/ui/LinkBtn'
import { MoviePlayer } from '@/ui/MoviePlayer'
import { Flex, H2 } from '@/ui/ui'

import styles from './MoviePageContent.module.scss'

interface MovePageContentProps {
  film: IMovie
  personsFromFilm: IPerson[]
}

export const MoviePageContent: FC<MovePageContentProps> = ({
  film,
  personsFromFilm,
}) => {
  const {
    name_ru,
    name_en,
    description,
    year,
    rating,
    assessments,
    reviews,
    age_limit,
    duration,
    img,
    trailers,
    genres,
    qualities,
    languagesAudio,
    countries,
  } = film

  const { t } = useTranslation(['common'])
  const router = useRouter()

  if (film === undefined) return <p>{`${t('common:search')}...`}</p>

  return (
    <div className={styles.MoviePageContent}>
      <div className={styles.headerBar}>
        <Breadcrumbs
          items={[
            {
              path: '/',
              text: 'Home',
            },
            {
              path: '/person/7982ecf2-8fae-471c-8ddf-2e3cbdab360e',
              text: 'Фёдор Бондарчук',
            },
          ]}
          separator='dot'
        />
      </div>
      <section>
        <Flex variant='start' gap='gap0'>
          <div className={styles.moviePlayer}>
            <MoviePlayer
              name={router.locale === 'ru' ? name_ru : name_en}
              videoSrc={
                trailers[0].trailer
                  ? trailers[0].trailer
                  : 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
              }
              posterSrc={trailers[0].img ? trailers[0].img : img}
            />
          </div>

          <div className={styles.movieInfomation}>
            <MovieInfomation
              ageRating={`${age_limit}+`}
              countries={countries.map((item) => item.country)}
              description={
                description
                  ? description
                  : `${t('TheDescriptionOfTheMovieIsNotInTheDatabase')}`
              }
              duration={duration}
              genres={
                router.locale === 'ru'
                  ? genres.map((item) => item.genre_ru)
                  : genres.map((item) => item.genre_en)
              }
              languagesAudio={languagesAudio.map((item) => item.language)}
              persons={personsFromFilm}
              productionYear={year}
              qualities={qualities.map((item) => item.quality)}
              rating={rating}
              title={router.locale === 'ru' ? name_ru : name_en}
            />
          </div>
        </Flex>
      </section>

      <section>
        <H2>{`С фильмом ... смотрят`}</H2>
        {/* <Slider
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
            items={kindCartoonsOut}
            onItemClick={() => {}}
          /> */}
      </section>

      <section>
        <H2 variant='titleBg'>{`Актёры и создатели`}</H2>

        <GalleryPersons persons={personsFromFilm} showMaxPersons={10} />
      </section>

      <section>
        <H2>{`Трейлеры и доп. материалы`}</H2>

        {film.trailers.map((trailer) => (
          <div key={trailer.trailer_id}>
            <MovieCard
              href={trailer.trailer}
              imgAlt='Trailer'
              imgSrc={trailer.img}
              mode='series'
              movieName='Трейлер (дублированный)'
              seriesLength='2 мин'
            />
          </div>
        ))}
      </section>

      <section>
        <H2>{`Комментарии к фильму`}</H2>
      </section>

      <section>
        <WatchAllDevices
          name={router.locale === 'ru' ? name_ru : name_en}
          poster={img}
        />
      </section>
    </div>
  )
}
