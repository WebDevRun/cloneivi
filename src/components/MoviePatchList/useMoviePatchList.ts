import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

import { $instance } from '@/axios'
import { IMovie } from '@/types/Movie'

export const useMoviePatchList = (initialMovies: IMovie[]) => {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState(initialMovies)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const getMovies = async (searchText: string) => {
      const { data: movies } = await $instance.get<
        AxiosRequestConfig<undefined>,
        AxiosResponse<IMovie[]>
      >(`/name/films?name=${searchText}`)

      setMovies(movies)
    }

    if (searchText !== '') {
      timeout = setTimeout(() => {
        getMovies(searchText)
      }, 500)
    } else {
      setMovies(initialMovies)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [searchText, initialMovies])

  return {
    movies,
    searchText,
    setSearchText,
  }
}
