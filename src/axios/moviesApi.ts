import { $instance } from '@/axios/index'
import { IMovie } from '@/types/films'

export const getFilms = async (): Promise<IMovie[]> => {
  const {data} = await $instance.get('movies/movies.json')

  return data
}