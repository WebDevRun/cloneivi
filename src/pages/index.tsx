import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { TextCollapse } from '@/components/TextCollapse'
import { Header } from '@components/Header'
import { AppLayout } from '@layouts/AppLayout'

import data from '../components/TextCollapse/data.json'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <h1>{t('header:more')}</h1>
        <Header />
      </AppLayout>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', ['header', 'common'])
  return {
    props: {
      ...localeData,
    },
  }
}
