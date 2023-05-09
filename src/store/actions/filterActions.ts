import { Dispatch } from 'react'

import { getGenres } from '@/axios/filterApi'
import { setFilterError, setFilterGenres, setIsFilterLoading } from '@/store/reducers/filterReducer'
import { FilterAction } from '@/store/types/filterStore'

export const fetchGenres = () => {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch(setIsFilterLoading(true))
    getGenres().then(genres => {
      dispatch(setFilterGenres(genres))
    }).catch(e => {
      dispatch(setFilterError(e))
    }).finally(() => {
      dispatch(setIsFilterLoading(false))
    })
  }
}