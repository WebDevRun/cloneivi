import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MovieDescription } from '@/components/MovieInfomation/MovieDescription'
import { Header } from '@components/Header'
import { AppLayout } from '@layouts/AppLayout'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <h1>{t('header:more')}</h1>
        <Header />
        <MovieDescription
          description='asda'
          qualities={['a', 'f']}
          languagesAudio={['asd', 'asd']}
          isClose
        />
      </AppLayout>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', [
    'header',
    'movieDetails',
  ])
  return {
    props: {
      ...localeData,
    },
  }
}
