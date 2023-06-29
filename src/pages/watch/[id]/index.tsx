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
import { IPerson } from '@/types/person'

interface MoviePageProps {
  id: string
}

const MoviePage: NextPageWithLayout<MoviePageProps> = ({ id }) => {
  const film = useGetFilmByIdQuery(id)
  const personsFromFilm = useGetPersonsFromFilmQuery(id)

  return (
    <>
      <MoviePageContent
        film={film.data as IMovie}
        personsFromFilm={personsFromFilm.data as IPerson[]}
      />
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
      store.dispatch(getFilmById.initiate(context.params.id))
      store.dispatch(getPersonsFromFilm.initiate(context.params.id))
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
