import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FormEvent, ReactElement } from 'react'

import { $instance } from '@/axios'
import { IMovie } from '@/types/Movie'
import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'
import { AppLayout } from '@layouts/AppLayout'

//import { getToken } from '../helpers/auth'; // функция для получения JWT токена
//import {Flex} from '../../../ui/ui'
import { Text } from '../../../ui/ui'
import { NextPageWithLayout } from '../../_app'
import styles from '../admin.module.scss'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZjdiMmJjMTUtZWE0OS00NTNlLWE5MjQtYzBjMzJiMjFjZWUwIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlcyI6W3sicm9sZV9pZCI6ImFiMjBhYjU5LThhMjYtNDUwYy04MWYwLTliNWNiZTQ2YjNlNCIsInZhbHVlIjoiYWRtaW4iLCJkZXNjcmlwdGlvbiI6ItCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAIn1dLCJpYXQiOjE2ODUzMDQyNjMsImV4cCI6MTY4NTMwNjA2M30.UCuVj_Monhu4Fw-w5Gkk2J7oj-MBlDL7BPSSu2PLeKE'

export interface IMoviePage {
  film: IMovie
}

const Edit: NextPageWithLayout<IMoviePage> = ({ film }) => {
  const { t } = useTranslation()
  const router = useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const api = axios.create({
      baseURL: 'http://localhost:4000',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    api.interceptors.request.use(
      async (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error),
    )

    const target = event.target as HTMLFormElement

    const data = {
      name_ru: target.movieTitleRu.value,
      name_en: target.movieTitleEn.value,
    }

    const sendData = async (data: any) => {
      const url = `/films/${film.film_id}`
      const response = await api.patch(url, data)
      return response.data
    }

    sendData(data)
  }

  return (
    <>
      <Text variant='titleBg'>{`${t('FilmEditing')}`}</Text>

      <form className={styles.form} name='message' onSubmit={handleSubmit}>
        <Input
          label={`${t('MovieTitle')} Ru`}
          name='movieTitleRu'
          defaultValue={film.name_ru}
        />
        <Input
          label={`${t('MovieTitle')} En`}
          name='movieTitleEn'
          defaultValue={film.name_en}
        />

        <Button type='submit' text={`${t('Save')}`} />
        <Button type='reset' text={`${t('Reset')}`} />
        <Link href='!#'>{`${t('Reset')}`}</Link>
      </form>
    </>
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
  >(`films/${params?.id}`)

  return {
    props: {
      ...localeData,
      film: data,
    },
  }
}
