import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { $instance } from '@/axios'
import { MoviePageContent } from '@/content/MoviePageContent'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app'
import {
  getFilmById,
  getRunningQueriesThunk,
  useGetFilmByIdQuery,
} from '@/store/endpoints/films'
import {
  getPersonsFromFilm,
  useGetPersonsFromFilmQuery,
} from '@/store/endpoints/persons'
import { wrapper } from '@/store/store'
import { IMovie } from '@/types/movie'

interface MoviePageProps {
  id: string
}

const MoviePage: NextPageWithLayout<MoviePageProps> = ({ id }) => {
  const {
    data: personsFromFilm,
    isError: isErrorPersons,
    error: errorPersons,
  } = useGetPersonsFromFilmQuery(id)

  const {
    data: film,
    isError: isErrorFilm,
    error: errorFilm,
  } = useGetFilmByIdQuery(id)

  const errorPersonsString = JSON.stringify(errorPersons)
  const errorFilmString = JSON.stringify(errorFilm)

  return (
    <>
      {isErrorPersons && <div>{`ErrorPerson!: ${errorPersonsString}`}</div>}
      {isErrorFilm && <div>{`ErrorFilm!: ${errorFilmString}`}</div>}

      {!film && <div>Фильм не существует</div>}
      {!personsFromFilm && <div>Список персон не существует</div>}

      {film && personsFromFilm && (
        <MoviePageContent film={film} personsFromFilm={personsFromFilm} />
      )}
    </>
  )
}

MoviePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default MoviePage

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IMovie[]>
  >('films')

  const paths = data.map((film) => {
    return { params: { id: film.film_id } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    if (typeof context.params?.id === 'string') {
      store.dispatch(getPersonsFromFilm.initiate(context.params.id))
      store.dispatch(getFilmById.initiate(context.params.id))
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()))

    const localeData = await serverSideTranslations(context.locale ?? 'ru', [
      'common',
    ])

    return {
      props: {
        id: context.params?.id,
        ...localeData,
      },
    }
  },
)
