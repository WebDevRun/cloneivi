import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Comments } from '@/components/Comments'
import { GalleryPersons } from '@/components/GalleryPersons'
import { MovieCard } from '@/components/MovieCard'
import { MovieInfomation } from '@/components/MovieInfomation'
import { IPerson } from '@/components/MovieInfomation/Medallions'
import { Slider } from '@/components/Slider'
import { WatchAllDevices } from '@/components/WatchAllDevices'
import { useGetFilmByGenresQuery } from '@/store/endpoints/films'
import { IMovie } from '@/types/movie'
import { Button } from '@/ui/Button'
import { MoviePlayer } from '@/ui/MoviePlayer'
import { Flex, H2, NavLink } from '@/ui/ui'
import { capitaliseStr } from '@/utils/functions'
import { iMovieToSliderProps } from '@/utils/functions/iMovieToSliderProps'

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
  const lang = router.locale

  const drams = useGetFilmByGenresQuery('драма').data as IMovie[]

  const withMovieWatching = iMovieToSliderProps(drams, lang as string)

  if (film === undefined) return <p>{`${t('common:search')}...`}</p>

  return (
    <div className={styles.MoviePageContent}>
      <div className={styles.headerBar}>
        <Breadcrumbs
          items={[
            {
              path: '/movies',
              text: router.locale === 'ru' ? 'Фильмы' : 'Movies',
            },
            {
              path: `/movies/${film.genres[0].slug}`,
              text: `${capitaliseStr(
                router.locale === 'ru'
                  ? film.genres[0].genre_ru
                  : film.genres[0].genre_en,
              )}`,
            },
          ]}
          separator='dot'
          lastAsLink
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

            <Flex gap='gap16' className={styles.userButtons}>
              <Button background='darkGrey' icon='playOutline' text='Трейлер' />
              <Button background='darkGrey' icon='favoriteAdd' />
              <Button background='darkGrey' icon='share' />
              <Button
                background='darkGrey'
                icon='catalog'
                text='Бесплатные фильмы'
                className={styles.freeCollection}
              />
            </Flex>
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
                  ? genres.map((item) => capitaliseStr(item.genre_ru))
                  : genres.map((item) => capitaliseStr(item.genre_en))
              }
              languagesAudio={languagesAudio.map((item) => item.language)}
              persons={personsFromFilm}
              productionYear={year}
              qualities={qualities.map((item) => item.quality)}
              rating={rating}
              title={router.locale === 'ru' ? name_ru : name_en}
              assessments={assessments}
            />
          </div>
        </Flex>
      </section>

      {withMovieWatching && (
        <section>
          <H2 variant='titleBg'>{`${t('WithTheMovieWatching', {
            filmNameRu: film.name_ru,
            filmNameEn: film.name_en,
          })}`}</H2>

          <Slider
            Component={MovieCard}
            arrowSize='big'
            slidesToShow={7}
            componentSetting={{
              style: 'fill',
              type: 'square',
              imgAlt: 'Movie Image',
              mode: 'small',
            }}
            isCrop={true}
            type='list'
            items={withMovieWatching}
            onItemClick={() => {}}
          />
        </section>
      )}

      <section>
        <H2 variant='titleBg'>
          <NavLink href={`${film.film_id}/person`} underline>{`${t(
            'ActorsAndCreators',
          )}`}</NavLink>
        </H2>

        <GalleryPersons persons={personsFromFilm} showMaxPersons={10} />
      </section>

      <section>
        <H2 variant='titleBg'>
          <NavLink href={`${film.film_id}/trailers`} underline>
            {`${t('TrailersAndExtrasMaterials')}`}
          </NavLink>
        </H2>

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
        <H2 variant='titleBg'>
          <NavLink href={`${film.film_id}/comments`} underline>{`${t(
            'CommentsOnTheFilm',
          )}`}</NavLink>
        </H2>
        <Comments />
      </section>

      <section>
        <WatchAllDevices
          name={router.locale === 'ru' ? name_ru : name_en}
          poster={img}
        />
      </section>

      <section className={styles.bottomBreadcrumbs}>
        <Breadcrumbs
          items={[
            {
              path: '/',
              text: router.locale === 'ru' ? 'Мой Иви' : 'My Ivi',
            },
            {
              path: '/movies',
              text: router.locale === 'ru' ? 'Фильмы' : 'Movies',
            },
            {
              path: `/movies/${film.genres[0].slug}`,
              text: `${capitaliseStr(
                router.locale === 'ru'
                  ? film.genres[0].genre_ru
                  : film.genres[0].genre_en,
              )}`,
            },
            {
              path: `/movies/${film.genres[0].slug}`,
              text: `${capitaliseStr(
                router.locale === 'ru'
                  ? film.name_ru
                  : film.name_en,
              )}`,
            },
          ]}
          separator='dot'
        />
      </section>
    </div>
  )
}
