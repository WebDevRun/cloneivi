import { FilterAction, FilterActionTypes, IFilterStore } from '@/store/types/filterStore'
import { ICountry, IGenre } from '@/types/movie'

const initialState: IFilterStore = {
  genres: [],
  countries: [],
  years: [],
  ratings: [],
  isFilterLoading: false,
}

export const filterReducer = (state = initialState, action: FilterAction) => {
  switch (action.type) {
    case FilterActionTypes.SET_GENRES:
      return {
        ...state,
        genres: action.genres,
      }
    case FilterActionTypes.SET_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
      }
    case FilterActionTypes.SET_YEARS:
      return {
        ...state,
        years: action.years,
      }
    case FilterActionTypes.SET_RATINGS:
      return {
        ...state,
        ratings: action.ratings,
      }
    case FilterActionTypes.SET_FILTER_LOADING:
      return {
        ...state,
        isFilterLoading: action.isLoading,
      }
    default:
      return state
  }
}

export const setFilterGenres = (genres: IGenre[]): FilterAction => ({
  type: FilterActionTypes.SET_GENRES,
  genres,
})

export const setFilterCountries = (countries: ICountry[]): FilterAction => ({
  type: FilterActionTypes.SET_COUNTRIES,
  countries,
})

export const setFilterYears = (years: number[]): FilterAction => ({
  type: FilterActionTypes.SET_YEARS,
  years,
})

export const setFilterRatings = (ratings: number[]): FilterAction => ({
  type: FilterActionTypes.SET_RATINGS,
  ratings,
})

export const setIsFilterLoading = (isLoading: boolean): FilterAction => ({
  type: FilterActionTypes.SET_FILTER_LOADING,
  isLoading,
})