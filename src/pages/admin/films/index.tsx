import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { MoviePatchList } from '@/components/MoviePatchList'
import { AdminLayout } from '@/layouts/AdminLayout'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { getFilms, getRunningQueriesThunk } from '@/store/endpoints/films'
import { wrapper } from '@/store/store'

const Films: NextPageWithLayout = () => {
  return <MoviePatchList />
}

Films.getLayout = (page: ReactElement) => {
  return (
    <AppLayout>
      <AdminLayout>{page}</AdminLayout>
    </AppLayout>
  )
}

export default Films

export const getStaticProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getFilms.initiate(20))
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
