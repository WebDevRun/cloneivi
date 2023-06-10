import { $instance } from '@/axios/index'
import { ICountry, IGenre } from '@/types/movie'

export const getGenres = async (): Promise<IGenre[]> => {
  const { data } = await $instance.get('/genres')

  return data
}

export const getCountries = async (): Promise<ICountry[]> => {
  const {data} = await $instance.get('/countries')

  return data
}