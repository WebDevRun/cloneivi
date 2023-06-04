import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import {
  getFilms,
  getRunningQueriesThunk,
  useGetFilmsQuery,
} from '@/store/endpoints/films'
import { wrapper } from '@/store/store'
import { AppLayout } from '@layouts/AppLayout'

export default function Movies() {
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

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(getFilms.initiate())
    store.dispatch(getRunningQueriesThunk())

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
