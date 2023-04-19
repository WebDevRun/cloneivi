import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { AppLayout } from '@layouts/AppLayout'


export const Home = () => {
  const { t } = useTranslation( ['header'] )

  return (
    <main>
      <AppLayout>
        <h1>{t( 'header:more' )}</h1>
      </AppLayout>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations( locale ?? 'ru', ['header'] )
  return {
    props: {
      ...localeData,
    },
  }
}
