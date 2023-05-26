import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { AdminLayout } from '@/layouts/AdminLayout'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app'

const Genres: NextPageWithLayout = () => {
  return <h3>Genres</h3>
}

Genres.getLayout = (page: ReactElement) => {
  return (
    <AppLayout>
      <AdminLayout>{page}</AdminLayout>
    </AppLayout>
  )
}

export default Genres

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', [
    'header',
    'adminPage',
  ])
  return {
    props: {
      ...localeData,
    },
  }
}
