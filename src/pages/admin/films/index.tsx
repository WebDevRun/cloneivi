import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement, useEffect, useState } from 'react'

import { AccessDenied } from '@/components/AccessDenied'
import { MoviePatchList } from '@/components/MoviePatchList'
import { AdminLayout } from '@/layouts/AdminLayout'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { getFilms, getRunningQueriesThunk } from '@/store/endpoints/films'
import { wrapper } from '@/store/store'

const Films: NextPageWithLayout = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    setIsAdmin(!!localStorage.getItem('isUserAdmin'))
  }, [])

  if (!isAdmin) {
    return (
      <div>
        <AccessDenied />
      </div>
    )
  } else
    return (
      <AdminLayout>
        <MoviePatchList />
      </AdminLayout>
    )
}

Films.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>
}

export default Films

export const getStaticProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getFilms.initiate(20))
    await Promise.all(store.dispatch(getRunningQueriesThunk()))

    const localeData = await serverSideTranslations(context.locale ?? 'ru')

    return {
      props: {
        ...localeData,
      },
    }
  },
)
