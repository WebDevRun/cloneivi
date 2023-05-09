import { ICountry, IGenre } from '@/types/movie'

export interface IFilterStore {
  genres: IGenre[]
  countries: ICountry[]
  years: number[]
  ratings: number[]
  isFilterLoading: boolean
}

export enum FilterActionTypes {
  SET_GENRES = 'SET_GENRES',
  SET_COUNTRIES = 'SET_COUNTRIES',
  SET_YEARS = 'SET_YEARS',
  SET_RATINGS = 'SET_RATINGS',
  SET_FILTER_LOADING = 'SET_FILTER_LOADING'
}

interface setGenres {
  type: FilterActionTypes.SET_GENRES
  genres: IGenre[]
}

interface setCountries {
  type: FilterActionTypes.SET_COUNTRIES
  countries: ICountry[]
}

interface setYears {
  type: FilterActionTypes.SET_YEARS
  years: number[]
}

interface setRatings {
  type: FilterActionTypes.SET_RATINGS
  ratings: number[]
}

interface setIsFilterLoading {
  type: FilterActionTypes.SET_FILTER_LOADING
  isLoading: boolean
}

export type FilterAction = setGenres | setCountries | setYears | setRatings | setIsFilterLoading
