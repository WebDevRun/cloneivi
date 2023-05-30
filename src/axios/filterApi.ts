import { $instance } from '@/axios/index'
import { IGenre } from '@/types/movie'

export const getGenres = async (): Promise<IGenre[]> => {
  const { data } = await $instance.get('/genres')

  return data
}