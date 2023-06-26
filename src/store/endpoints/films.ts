import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { IMovie } from '@/types/movie'

const url = process.env.NEXT_PUBLIC_API_URL

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  tagTypes: ['Films'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getFilms: builder.query<IMovie[], number | void>({
      query: (limit) => {
        return limit === undefined ? '/films' : `/films?limit=${limit}`
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map((movie) => ({
                type: 'Films' as const,
                id: movie.film_id,
              })),
              { type: 'Films', id: 'LIST' },
            ]
          : [{ type: 'Films', id: 'LIST' }],
    }),
    getFilmById: builder.query<IMovie, string>({
      query: (id) => `/films/${id}`,
      providesTags: (result, error, id) => [{ type: 'Films', id }],
    }),
  }),
})

export const {
  useGetFilmsQuery,
  useGetFilmByIdQuery,
  util: { getRunningQueriesThunk },
} = filmsApi

export const { getFilms, getFilmById } = filmsApi.endpoints
