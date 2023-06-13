import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { $instance } from '@/axios'
import { EditFilms } from '@/components/Admin/EditFilms'
import { BackLink } from '@/components/BackLink'
import { IMovie } from '@/types/movie'
import { AppLayout } from '@layouts/AppLayout'

import { NextPageWithLayout } from '../../_app'
import styles from '../admin.module.scss'


export interface IMoviePage {
  film: IMovie
}

const Edit: NextPageWithLayout<IMoviePage> = ({ film }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.editFilmsPage}>
      <BackLink text={`${t('Back')}`} />
      <EditFilms film={film} />
    </div>
  )
}

Edit.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Edit

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const localeData = await serverSideTranslations(locale ?? 'ru')
  const { data } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IMovie>
  >(`${process.env.NEXT_PUBLIC_API_URL}/films/${params?.id}`)

  return {
    props: {
      ...localeData,
      film: data,
    },
  }
}
