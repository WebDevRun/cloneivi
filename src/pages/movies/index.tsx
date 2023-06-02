import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import {
  getFilms,
  getRunningQueriesThunk,
  useGetFilmsQuery,
} from '@/store/endpoints/films'
import { wrapper } from '@/store/store'
import { AppLayout } from '@layouts/AppLayout'

export default function Movies() {
  const { t } = useTranslation(['common'])
  const { data } = useGetFilmsQuery()

  return (
    <AppLayout>
      <h1>{t('common:subscriptionTitle')}</h1>
      {data?.map((movie) => {
        return <p key={movie.film_id}>{movie.name_ru}</p>
      })}
    </AppLayout>
  )
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
