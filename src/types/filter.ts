import { IGenre } from '@/types/Movie'

export type IFilterPosition = 'left' | 'center' | 'right'
export type IFilterItems = IGenre[] | string[] | number[]
export type IFilterCategory = 'genre' | 'country' | 'year' | 'rating'

export type IActiveFilterModal = 'genre' | 'country' | 'year' | 'rating' | ''