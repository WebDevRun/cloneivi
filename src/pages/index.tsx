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
        <div style={{display: 'flex', gap: '20px'}}>
          <MovieCard
            href="/"
            imgSrc="https://thumbs.dfs.ivi.ru/storage26/contents/a/0/5944f945ac1f0e39d6d0ca1c709f31.jpg/234x360//?q=85"
            imgAlt="Movie img"
            ageLimit={18}
            movieName="Ничто не случается"
            properties={{
              rating: '8,0',
              year: '2013',
              genre: 'Мелодрамы',
              seasons: 1,
            }}
          />
          <MovieCard
            href="/"
            imgSrc="https://thumbs.dfs.ivi.ru/storage28/contents/0/8/3d2850061083ba6946ad877bc9102d.jpg/234x360//?q=85"
            imgAlt="Movie img"
            ageLimit={18}
            movieName="Ничто не случается"
            properties={{
              rating: '8,0',
              year: '2013',
              genre: 'Мелодрамы',
              seasons: 1,
            }}
          />
        </div>
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
