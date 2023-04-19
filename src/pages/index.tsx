import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MovieCard } from '@/components/MovieCard'
import { AppLayout } from '@layouts/AppLayout'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <h1>{t('header:more')}</h1>
        <MovieCard
          href="/"
          imgSrc="	https://thumbs.dfs.ivi.ru/storage26/contents/a/0/5944f945ac1f0e39d6d0ca1c709f31.jpg/234x360//?q=85"
          imgAlt="Movie img"
          ageLimit={18}
          movieName="Ничто не случается"
          properties={{
            rating: '8,0',
            year: '2013',
            genre: 'Мелодрамы',
            seasons: 1
          }}
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
