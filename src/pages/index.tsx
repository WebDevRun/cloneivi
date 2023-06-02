import { Header } from '@components/Header'
import { AppLayout } from '@layouts/AppLayout'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

<<<<<<< HEAD
export default function Home() {
  const { t } = useTranslation(['header'])
=======
import { Header } from '@components/Header'
import { AppLayout } from '@layouts/AppLayout'

import { NextPageWithLayout } from './_app'
>>>>>>> 86a82710f14a418092547e132b8361816dbfc604

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation(['header'])
  return <h1>{t('header:more')}</h1>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', [
    'header',
    'common',
  ])
  return {
    props: {
      ...localeData,
    },
  }
}