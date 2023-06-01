import axios, { AxiosResponse } from 'axios'

import { IMovie, IMovieName } from '../../types/movie'
import { getToken } from '../auth/getToken'

const api = axios.create({
  baseURL: 'http://localhost:4000', // process.env.NEXT_PUBLIC_API_URL, //
})

api.interceptors.request.use(
  async (config) => {
    const token = await getToken()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

export const changeFilmName = async (
  idFilm: string,
  userData: IMovieName,
): Promise<IMovie[]> => {
  const { data }: AxiosResponse<IMovie[]> = await api.patch(
    `/films/${idFilm}`,
    userData,
  )
  return data
}

export const deleteFilm = async (idFilm: string): Promise<IMovie[]> => {
  const { data }: AxiosResponse<IMovie[]> = await api.delete(`/films/${idFilm}`)
  return data
}
