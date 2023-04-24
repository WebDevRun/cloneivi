import { AppLayout } from '@layouts/AppLayout'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useState } from 'react'

import { MovieCard } from '@/components/MovieCard'

interface movies {
  actors: string[]
  ageRaiting: string
  countries: string[]
  director: string
  genre: any
  productionYear: number
  raiting: number
  raitingCount: number
  reitingMPAA: string
}

export default function Home() {
  const { t } = useTranslation(['header'])
  const [movies, setMovies] = useState<movies[]>([])

  useEffect(() => {
    axios.get('./movies/movies.json').then((response) => {
      setMovies(response.data)
    })
  }, [])

  return (
    <main>
      <AppLayout>
        <h1>{t('header:more')}</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              href="/"
              imgSrc="https://thumbs.dfs.ivi.ru/storage26/contents/a/0/5944f945ac1f0e39d6d0ca1c709f31.jpg/234x360//?q=85"
              imgAlt="Movie img"
              ageLimit={movie.ageRaiting}
              movieName={"Ничто не случается"}
              properties={{
                rating: movie.raiting,
                year: movie.productionYear,
                genre: movie.genre.ru.join(', '),
                seasons: 1,
              }}
            />
          ))}
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
