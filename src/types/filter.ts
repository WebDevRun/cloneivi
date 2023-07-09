import { ICountry, ILocaleGenre, IRating, IYear } from '@/types/movie'

export interface ILocaleFilters {
  genres: ILocaleGenre[]
  countries: ICountry[]
  years: IYear[]
  rating: IRating[]
}

export type IFilter = ICountry | IYear | IRating | ILocaleGenre
export type IFilterPosition = 'left' | 'center' | 'right'
export type ILocaleFilterItems = (ILocaleGenre | ICountry | IYear | IRating)[]
export type ILocaleFilterItem = ILocaleGenre | ICountry | IYear | IRating
export type IFilterCategory = 'genre' | 'country' | 'year' | 'rating'

export type IActiveFilterModal = 'genre' | 'country' | 'year' | 'rating' | ''