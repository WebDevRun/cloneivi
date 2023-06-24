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
    getFilmsByName: builder.query<IMovie[], string>({
      query: (name) => `/name/films?name=${name}`,
      transformResponse: (response: IMovie[]) => response.slice(0, 30),
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
    deleteFilm: builder.mutation<void, string>({
      query: (id) => ({
        url: `/films/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Films', id }],
    }),
  }),
})

export const {
  useGetFilmsQuery,
  useLazyGetFilmsByNameQuery,
  useDeleteFilmMutation,
  util: { getRunningQueriesThunk },
} = filmsApi

export const { getFilms, getFilmsByName } = filmsApi.endpoints
