import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FC } from 'react'

import { $instance } from '@/axios'
import { Comments } from '@/components/Comments'
import { IComment } from '@/types/Comments'
import { IMovie } from '@/types/movie'
import { AppLayout } from '@layouts/AppLayout'

export interface CommentsProps {
  comments: IComment[]
}

const CommentPage: FC<CommentsProps> = ({ comments }) => {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <Comments comments={comments} />
      </AppLayout>
    </main>
  )
}

export default CommentPage

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IMovie[]>
  >('/films')

  const paths = data.map((film) => {
    return { params: { id: film.film_id } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const localeData = await serverSideTranslations(context.locale ?? 'ru', [
    'header',
  ])

  const { data } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IComment[]>
  >(`/comments/films/${context.params?.id}`)

  return {
    props: {
      comments: data,
      ...localeData,
    },
  }
}
