import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { IMovie } from '@/types/movie'

const url = process.env.NEXT_PUBLIC_API_URL

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getFilms: builder.query<IMovie[], void>({
      query: () => '/films',
    }),
    getFilm: builder.query<IMovie, string>({
      query: (id) => `/films/${id}`,
    }),
  }),
})

export const {
  useGetFilmsQuery,
  util: { getRunningQueriesThunk },
} = filmsApi

export const { getFilms } = filmsApi.endpoints
