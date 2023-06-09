import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { MovieInfomation } from '@/components/MovieInfomation'
import { AppLayout } from '@layouts/AppLayout'

import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <MovieInfomation
      ageRating='0+'
      countries={['США']}
      description='Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома... одного из своих детей. Юное создание, однако, не теряется и демонстрирует чудеса изобретательности. И когда в дом залезают грабители, им приходится не раз пожалеть о встрече с милым крошкой.'
      duration={103}
      genres={['комедия', 'семейный']}
      languagesAudio={['русский', 'английский']}
      persons={[
        {
          first_name_en: 'Николас',
          first_name_ru: 'Николас',
          img: 'https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg',
          last_name_en: 'Фут',
          last_name_ru: 'Фут',
          person_id: 'f2ccd0f3-5722-4c57-9d81-b71d5a0f2b3b',
        },
        {
          first_name_en: 'Деверт',
          first_name_ru: 'Деверт',
          img: 'https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg',
          last_name_en: 'Хикмэн',
          last_name_ru: 'Хикмэн',
          person_id: '6e65e481-0080-4ade-866d-dd2f358aab61',
        },
        {
          first_name_en: 'Алекс',
          first_name_ru: 'Алекс',
          img: 'https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg',
          last_name_en: 'Шлегель',
          last_name_ru: 'Шлегель',
          person_id: 'a9063637-3cb6-4375-9295-d900b8384b12',
        },
        {
          first_name_en: 'Люсия',
          first_name_ru: 'Люсия',
          img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/9b65685d-90a6-4af9-ac15-7e9f4b2f0127/280x420',
          last_name_en: 'Струс',
          last_name_ru: 'Струс',
          person_id: 'a520c99d-d703-4716-a293-41a4f7bdecbc',
        },
      ]}
      productionYear={1990}
      qualities={['4K', 'FullHD', 'HD', '1080', '720', '5.1']}
      rating={7.4}
      title='Один дома (Фильм 1990)'
    />
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', [
    'common',
  ])

  return {
    props: {
      ...localeData,
    },
  }
}
