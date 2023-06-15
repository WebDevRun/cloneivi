import axios, { AxiosResponse } from 'axios'

import { IMovie, IMovieName } from '../../types/movie'
import { getToken } from '../auth/getToken'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use(
  async (config) => {
    const token = getToken()

    //const token =
    //  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYjYxNWU1ZGYtYzA1Ny00YjY5LTgyMGItNWIyMTU1YWMyYjFjIiwiZW1haWwiOiJxd2VyQGJrLnJ1Iiwicm9sZXMiOltdLCJpYXQiOjE2ODY4MDY2NjksImV4cCI6MTY4NjgwODQ2OX0.qywkK_mnjJ4Ccc2tSe3wie_gy4M7yCGJkeexOssF5oM'

    console.log(token)

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
