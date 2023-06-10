import { ParsedUrlQuery } from 'querystring'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FC } from 'react'

import { getCountries, getGenres } from '@/axios/filterApi'
import { IFilterCategory } from '@/types/filter'
import { ICountry, IGenre, IRating, IYear } from '@/types/movie'
import { RATINGS, YEARS } from '@/utils/consts'
import { Filter } from '@components/Filter'
import { AppLayout } from '@layouts/AppLayout'

interface Query {
  query: {
    [p: string]: string[] | string | undefined
  }
  genres: (IGenre | undefined)[]
}

interface AllFilters {
  genre: IGenre[]
  country: ICountry[]
  year: IYear[]
  rating: IRating[]
}

export interface MovieProps {
  urlQuery: Query
}

const getFilterGenres = (params: string | string[] | undefined, allFilters: AllFilters, category: IFilterCategory) => {
  console.log(typeof allFilters[category])
  return []
  // const currentFilters: Array<typeof allFilters[category]> = allFilters[category]
  // if (!params || !allFilters || !allFilters[category]) return []
  //
  // if (Array.isArray(params)) {
  //   return params
  //     .filter(p => allFilters[category].some(f => f.slug === p))
  //     .map(p => allFilters[category].find(g => g.slug === p))
  // } else {
  //   return genres.some(g => params === g.slug)
  //     ? genres.filter(g => params === g.slug)
  //     : []
  // }
}

const getParams = (urlQuery: ParsedUrlQuery, allFilters: AllFilters): Query => {
  const { params, ...query } = urlQuery
  // const allFilters = () =>
  const genresFilter = getFilterGenres(params, allFilters, 'genre')

  return {
    query,
    genres: genresFilter,
  }
}

const Movie: FC<MovieProps> = ({ urlQuery }) => {
  console.log(urlQuery)
  return (
    <AppLayout>
      <Filter />
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale, query }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru')
  let genres: IGenre[] = []
  let countries: ICountry[] = []

  getGenres().then(g => genres = g)
  getCountries().then(c => countries = c)

  const allFilters: AllFilters = {
    genre: genres,
    country: countries,
    year: YEARS,
    rating: RATINGS,
  }

  const urlQuery = getParams(query, allFilters)

  return {
    props: {
      ...localeData,
      urlQuery,
      genres,
      countries,
    },
  }
}
export default Movie