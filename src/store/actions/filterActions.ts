import { Dispatch } from 'react'

import { getGenres } from '@/axios/filterApi'
import { setFilterGenres, setIsFilterLoading } from '@/store/reducers/filterReducer'
import { FilterAction } from '@/store/types/filterStore'

export const fetchGenres = () => {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch(setIsFilterLoading(true))
    getGenres().then(genres => {
      dispatch(setFilterGenres(genres))
    }).catch(e => {
      console.error(e)
    }).finally(() => {
      dispatch(setIsFilterLoading(false))
    })
  }
}