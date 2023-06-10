import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { $instance } from '@/axios'
import { Movie } from '@/components/Movie'
import { AppLayout } from '@/layouts/AppLayout'
import { getFilmById, getRunningQueriesThunk } from '@/store/endpoints/films'
import { wrapper } from '@/store/store'
import { IMovie } from '@/types/movie'

const MoviePage = () => {
  return <Movie />
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
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()))

    const localeData = await serverSideTranslations(context.locale ?? 'ru', [
      'header',
      'common',
    ])

    return {
      props: {
        ...localeData,
      },
    }
  },
)
