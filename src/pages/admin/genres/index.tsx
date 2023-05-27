import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { $instance } from '@/axios'
import { GenrePatchList } from '@/components/GenrePatchList'
import { AdminLayout } from '@/layouts/AdminLayout'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { IGenre } from '@/types/Movie'

interface GenreProps {
  genres: IGenre[]
}

const Genres: NextPageWithLayout<GenreProps> = ({ genres }) => {
  return <GenrePatchList genres={genres} />
}

Genres.getLayout = (page: ReactElement) => {
  return (
    <AppLayout>
      <AdminLayout>{page}</AdminLayout>
    </AppLayout>
  )
}

export default Genres

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', [
    'header',
    'adminPage',
  ])

  const { data: genres } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IGenre[]>
  >('/genres')

  return {
    props: {
      genres,
      ...localeData,
    },
  }
}
