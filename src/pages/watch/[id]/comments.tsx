import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FC, useState } from 'react'

import { $instance } from '@/axios'
import { Comments } from '@/components/Comments'
import { IComment } from '@/types/Comments'
import { AppLayout } from '@layouts/AppLayout'

export interface CommentsProps {
  initialComments: IComment[]
}

const CommentPage: FC<CommentsProps> = ({ initialComments }) => {
  const [comments, setComments] = useState<IComment[]>(initialComments)
  const { t } = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <Comments comments={comments} setComments={setComments} />
      </AppLayout>
    </main>
  )
}

export default CommentPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const localeData = await serverSideTranslations(context.locale ?? 'ru', [
    'header',
  ])

  const { data } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IComment[]>
  >(`/comments/films/${context.params?.id}`)

  return {
    props: {
      initialComments: data,
      ...localeData,
    },
  }
}
