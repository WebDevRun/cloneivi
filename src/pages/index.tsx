import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { AppLayout } from '@layouts/AppLayout'

import data from './data.json'

import { NextPageWithLayout } from './_app'
import { MovieCard } from '@/components/MovieCard'
import { Slider } from '@/components/Slider'
import { LinkBtn } from '@/ui/LinkBtn'

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1>{t('common:more')}</h1>

      <MovieCard
        ageLimit='18+'
        genre={['Мелодрамы']}
        href='#'
        imgAlt='Movie Image'
        imgSrc='https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450/'
        mode='small'
        movieName='Город бога'
        rating={8.3}
        year={2019}
      />
      <div style={{ width: '70%' }}>
        <MovieCard
          ageLimit='18+'
          href='#'
          imgAlt='img'
          imgSrc='https://thumbs.dfs.ivi.ru/storage5/contents/7/3/cc7c10cda44dca95a94361d17bc602.jpg/1216x370/'
          mode='big'
        />
      </div>

      <div
        style={{
          padding: '40px 0',
        }}
      >
        <Slider
          Component={MovieCard}
          arrowSize='big'
          componentSetting={{
            ageLimit: '18+',
            genre: ['Мелодрамы'],
            href: '#',
            imgAlt: 'Movie Image',
            mode: 'small',
            movieName: 'Город бога',
            rating: 8.3,
            year: 2019,
          }}
          items={[
            {
              id: 0,
              name: 'anime',
              imgSrc:
                'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450/',
            },
            {
              id: 1,
              name: 'biography',
              imgSrc:
                'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/8afa0b4e-1b98-46b7-9975-ad0bd03906e4/300x450/',
            },
            {
              id: 2,
              name: 'action',
              imgSrc:
                'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450/',
            },
            {
              id: 3,
              name: 'western',
              imgSrc:
                'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/58fceb6a-3f78-4ffd-aef3-04c6d6ed209f/300x450/',
            },
            {
              id: 4,
              name: 'military',
              imgSrc:
                'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/c0ed19c8-8fa3-48dd-87bf-ec8ba0cce029/300x450/',
            },
            {
              id: 5,
              name: 'detective',
            },
            {
              id: 6,
              name: 'children',
            },
            {
              id: 7,
              name: 'adults',
            },
          ]}
          onItemClick={() => {}}
        />
      </div>
      <div
        style={{
          padding: '40px 0',
        }}
      >
        <Slider
          Component={MovieCard}
          arrowSize='big'
          componentSetting={{
            href: '/',
            imgAlt: '',
            mode: 'top10',
          }}
          items={data}
          onItemClick={() => {}}
        />
      </div>

      <div
        style={{
          padding: '40px 0',
        }}
      >
        <Slider
          Component={LinkBtn}
          isCrop={false}
          arrowSize='big'
          componentSetting={{
            background: 'lightgray',
            mode: 'footer',
            type: 'circle',
          }}
          items={
            [
              {text: 'Американские фильмы', href: '#'},
              {text: 'Романтика', href: ''},
              {text: 'Американские фильмы', href: ''},
              {text: 'Романтика', href: ''},
              {text: 'Американские фильмы', href: ''},
              {text: 'Романтика', href: ''},
              {text: 'Американские фильмы', href: ''},
              {text: 'Романтика', href: ''},
            ]
          }
          onItemClick={() => {}}
        />
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', ['common'])
  return {
    props: {
      ...localeData,
    },
  }
}
