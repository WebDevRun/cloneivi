import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { $instance } from '@/axios'
import { Comments } from '@/components/Comments'
import { NextPageWithLayout } from '@/pages/_app'
import { getComments, getRunningQueriesThunk } from '@/store/endpoints/comments'
import { wrapper } from '@/store/store'
import { IComment } from '@/types/comments'
import { IMovie } from '@/types/movie'
import { AppLayout } from '@layouts/AppLayout'

export interface CommentsProps {
  initialComments: IComment[]
}

const CommentsPage: NextPageWithLayout = () => {
  return <Comments />
}

CommentsPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default CommentsPage

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: films } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IMovie[]>
  >(`/films`)

  const paths = films.map((film) => {
    return { params: { id: film.film_id } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    if (typeof context.params?.id === 'string') {
      store.dispatch(getComments.initiate(context.params?.id))
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()))

    const localeData = await serverSideTranslations(context.locale ?? 'ru', [
      'common',
    ])

    return {
      props: {
        ...localeData,
      },
    }
  },
)
