import { $instance } from '@/axios/index'
import { Movie } from '@/types/Movie'

export const getFilms = async (): Promise<Movie[]> => {
  const { data } = await $instance.get('movies/movies.json')

  return data
}
