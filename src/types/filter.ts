import { ICountry, IGenre, IRating, IYear } from '@/types/movie'

export interface ICountrySlug {
  id: string
  name: string
  slug: string
}

export interface IFilterSettings {
  genre: IGenre[]
  country: ICountry[]
  year: IYear[]
  rating: IRating
}

export type IFilterPosition = 'left' | 'center' | 'right'
export type IFilterItems = IGenre[] | string[] | number[]
export type IFilterCategory = 'genre' | 'country' | 'year' | 'rating'

export type IActiveFilterModal = 'genre' | 'country' | 'year' | 'rating' | ''