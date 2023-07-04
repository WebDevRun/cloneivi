import { Dispatch } from 'react'

import { getCountries, getGenres } from '@/axios/filterApi'
import {
  setFilterCountries,
  setFilterError,
  setFilterGenres,
  setIsFilterLoading,
} from '@/store/reducers/filterReducer'
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

export const fetchCountries = () => {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch(setIsFilterLoading(true))
    getCountries().then(countries => {
      dispatch(setFilterCountries(countries))
    }).catch(e => {
      dispatch(setFilterError(e))
    }).finally(() => {
      dispatch(setIsFilterLoading(false))
    })
  }
}