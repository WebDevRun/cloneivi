import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { AppLayout } from '@layouts/AppLayout'
import { MovieCard } from '@/components/MovieCard'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <h1>{t('header:more')}</h1>
        <MovieCard
          href='/'
          imgSrc='https://thumbs.dfs.ivi.ru/storage30/contents/7/a/85ca60237f99b2eb2a064f24fb1878.jpg/234x360/?q=85'
          imgAlt='Movie img'
          ageLimit={18}
          movieName='Ничто не случается дважды'
        />
      </AppLayout>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', ['header'])
  return {
    props: {
      ...localeData,
    },
  }
}
