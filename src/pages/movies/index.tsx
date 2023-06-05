import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import {
  getFilms,
  getRunningQueriesThunk,
  useGetFilmsQuery,
} from '@/store/endpoints/films'
import { wrapper } from '@/store/store'
import { AppLayout } from '@layouts/AppLayout'

import { NextPageWithLayout } from '../_app'

const Movies: NextPageWithLayout = () => {
  const { data } = useGetFilmsQuery()

  return (
    <>
      {data?.map((movie) => {
        return <p key={movie.film_id}>{movie.name_ru}</p>
      })}
    </>
  )
}

Movies.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Movies

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(getFilms.initiate())
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
