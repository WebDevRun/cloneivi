import { IGenre } from '@/types/Movie'

export interface ICountrySlug {
  id: string
  name: string
  slug: string
}

export interface IFilterSettings {
  genre: IGenre[]
  country: string[]
  year: number
  rating: number
}

export type IFilterPosition = 'left' | 'center' | 'right'
export type IFilterItems = IGenre[] | string[] | number[]
export type IFilterCategory = 'genre' | 'country' | 'year' | 'rating'

export type IActiveFilterModal = 'genre' | 'country' | 'year' | 'rating' | ''