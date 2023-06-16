import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FC } from 'react'

import { $instance } from '@/axios'
import { ILocaleFilterItem, ILocaleFilters } from '@/types/filter'
import { ICountry, IGenre, ILocaleGenre, IMovie, IRating, IYear } from '@/types/movie'
import { IVI_RATING, RATINGS, YEARS } from '@/utils/consts'
import { Filter } from '@components/Filter'
import { AppLayout } from '@layouts/AppLayout'

const FILMS_LIMIT = 35

type Params = string | string[] | undefined
type AllFilters = (ILocaleGenre | IRating | ICountry | IYear | undefined)[]

export interface SelectedFilter {
  queryParams: string[]
  filters: AllFilters,
}

const getSelectedFilters = (params: Params, allFilters: AllFilters): SelectedFilter => {
  let result: SelectedFilter = {
    queryParams: [],
    filters: [],
  }
  if (!params || !allFilters) return result
  if (Array.isArray(params)) {
    params = params.map(param => param.split('+')).flat()

    result.queryParams = params
      .filter(param => allFilters.some(filter => filter?.slug === param))
    result.filters = params
      .filter(param => allFilters.some(filter => filter?.slug === param))
      .map(param => allFilters.find(filter => filter?.slug === param))
  } else {
    params = params.split('+')
    result.queryParams = params
    result.filters = allFilters.filter(filter => filter?.slug === params)
  }
  return result
}

const localeGenres = (genres: IGenre[], locale: string | undefined):ILocaleGenre[] => {
  return genres.map(genre => {
    return {
      genre_id: genre.genre_id,
      genre_name: locale === 'ru' ? genre.genre_ru : genre.genre_en,
      slug: genre.slug
    }
  })
}

export interface MovieProps {
  selectedFilters: ILocaleFilters
  allFilters: ILocaleFilters
  films: IMovie[]
}

const Movie: FC<MovieProps> = ({ selectedFilters, films, allFilters }) => {
  return (
    <AppLayout>
      <Filter allFilters={allFilters} selectedFilters={selectedFilters}/>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale, query }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru')
  const { params, ...urlQuery } = query

  const { data: genres } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IGenre[]>
  >(`genres`)
  const { data: countries } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<ICountry[]>
  >(`countries`)

  const selectedGenres = getSelectedFilters(params, localeGenres(genres, locale))
  const selectedCountries = getSelectedFilters(params, countries)
  const selectedYears = getSelectedFilters(params, YEARS)
  const selectedRatings = getSelectedFilters(urlQuery[IVI_RATING], RATINGS)

  const { data: films } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IMovie[]>
  >(`filter/films`, {
    params: {
      genres: selectedGenres.queryParams,
      countries: selectedCountries.queryParams,
      years: selectedYears.queryParams,
      rating: selectedRatings.queryParams,
      limit: FILMS_LIMIT,
    },
  })

  return {
    props: {
      ...localeData,
      selectedFilters: {
        genres: selectedGenres.filters,
        countries: selectedCountries.filters,
        years: selectedYears.filters,
        rating: selectedRatings.filters,
      },
      allFilters: {
        genres: localeGenres(genres, locale),
        countries: countries,
        years: YEARS,
        rating: RATINGS,
      },
      films,
      locale,
    },
  }
}
export default Movie