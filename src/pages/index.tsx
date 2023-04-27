import { AppLayout } from '@layouts/AppLayout'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MovieCard } from '@/components/MovieCard'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <h1>{t('header:more')}</h1>
        <MovieCard
          ageLimit="18+"
          href="/"
          imgAlt=""
          imgSrc="https://thumbs.dfs.ivi.ru/storage9/contents/4/7/4f5465145498592106dfdc9675fe0d.jpg/234x360//?q=85"
          movieName='Гринч'
          rating={7.6}
          year='2019-2020'
          genre={['horror', 'comedy']}
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
