import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetStaticPaths } from 'next'
import { FC } from 'react'

import { $instance } from '@/axios'
import { IMovie } from '@/types/movie'

const Film: FC = () => {
  return null
}

export default Film

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
