import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { GenrePatchList } from '@/components/GenrePatchList'
import { AdminLayout } from '@/layouts/AdminLayout'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { getGenres, getRunningQueriesThunk } from '@/store/endpoints/genres'
import { wrapper } from '@/store/store'

const Genres: NextPageWithLayout = () => {
  return <GenrePatchList />
}

Genres.getLayout = (page: ReactElement) => {
  return (
    <AppLayout>
      <AdminLayout>{page}</AdminLayout>
    </AppLayout>
  )
}

export default Genres

export const getStaticProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getGenres.initiate())
    await Promise.all(store.dispatch(getRunningQueriesThunk()))

    const localeData = await serverSideTranslations(context.locale ?? 'ru', [
      'header',
      'common',
      'adminPage',
    ])

    return {
      props: {
        ...localeData,
      },
    }
  },
)
