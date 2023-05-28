import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { $instance } from '@/axios'
import { MoviePatchList } from '@/components/MoviePatchList'
import { AdminLayout } from '@/layouts/AdminLayout'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { IMovie } from '@/types/Movie'

interface FilmsProps {
  initialMovies: IMovie[]
}

const Films: NextPageWithLayout<FilmsProps> = ({ initialMovies }) => {
  return <MoviePatchList initialMovies={initialMovies} />
}

Films.getLayout = (page: ReactElement) => {
  return (
    <AppLayout>
      <AdminLayout>{page}</AdminLayout>
    </AppLayout>
  )
}

export default Films

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', [
    'header',
    'adminPage',
  ])

  const { data: initialMovies } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IMovie[]>
  >('/films?limit=30')

  return {
    props: {
      initialMovies,
      ...localeData,
    },
  }
}
