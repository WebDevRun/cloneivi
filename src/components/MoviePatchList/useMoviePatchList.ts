import { useEffect, useState } from 'react'

import { useLazyGetFilmsByNameQuery } from '@/store/endpoints/films'
import { IMovie } from '@/types/movie'

export const useMoviePatchList = (initialMovies: IMovie[] | undefined) => {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState(initialMovies)
  const [setName, result] = useLazyGetFilmsByNameQuery()

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const getMovies = async () => {
      await setName(searchText)
      setMovies(result.data)
    }

    if (searchText !== '') {
      timeout = setTimeout(() => {
        getMovies()
      }, 500)
    } else {
      setMovies(initialMovies)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [searchText, initialMovies, setName, result.data])

  return {
    movies,
    searchText,
    setSearchText,
  }
}
