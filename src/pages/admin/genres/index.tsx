import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement, useEffect, useState } from 'react'

import { AccessDenied } from '@/components/AccessDenied'
import { GenrePatchList } from '@/components/GenrePatchList'
import { AdminLayout } from '@/layouts/AdminLayout'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { getGenres, getRunningQueriesThunk } from '@/store/endpoints/genres'
import { wrapper } from '@/store/store'

const Genres: NextPageWithLayout = () => {
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
        <GenrePatchList />
      </AdminLayout>
    )
}

Genres.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>
}

export default Genres

export const getStaticProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getGenres.initiate())
    await Promise.all(store.dispatch(getRunningQueriesThunk()))

    const localeData = await serverSideTranslations(context.locale ?? 'ru')

    return {
      props: {
        ...localeData,
      },
    }
  },
)
