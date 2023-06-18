import { IFilterCategory, ILocaleFilterItem, ILocaleFilterItems } from '@/types/filter'

export const getFilterName = (
  filter: ILocaleFilterItem,
  category: IFilterCategory,
): string => {
  switch (category) {
    case 'genre':
    case 'rating':
    case 'year':
      // @ts-ignore
      return filter[`${category}_name`]
    case 'country':
      // @ts-ignore
      return filter.country
  }
}

export const getFiltersUrlQuery = (
  filters: ILocaleFilterItems,
  category: IFilterCategory,
): string => {
  const filtersQuery = filters.map(filter => filter.slug)
  switch (category) {
    case 'genre':
    case 'country':
      return filtersQuery.length > 0 ? '/' + filtersQuery.join('+') : ''
    case 'year':
      return filtersQuery.length > 0 ? '/' + filtersQuery[0] : ''
    case 'rating':
      return filtersQuery.length > 0 ? `?ivi_rating_10_gte=${filtersQuery[0]}` : ''
  }
}