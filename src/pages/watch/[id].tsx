import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'

import { $instance } from '@/axios'
import { Header } from '@/components/Header'
import { AppLayout } from '@/layouts/AppLayout'
import { IMovie } from '@/types/movie'
import { MoviePlayer } from '@/ui/MoviePlayer'

export interface MovieProps {
  movie: IMovie
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <AppLayout>
      <Header />
      <MoviePlayer
        name={movie.name_ru}
        videoSrc='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        posterSrc={movie.trailers[0].img}
      />
    </AppLayout>
  )
}

export default Movie

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IMovie[]>
  >('films')

  const paths = data.map((film) => {
    return { params: { id: film.film_id } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IMovie>
  >(`films/${context.params?.id}`)

  return {
    props: {
      movie: data,
    },
  }
}
