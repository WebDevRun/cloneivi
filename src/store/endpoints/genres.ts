import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { IGenre } from '@/types/movie'

const url = process.env.NEXT_PUBLIC_API_URL

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  tagTypes: ['Genres'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getGenres: builder.query<IGenre[], number | void>({
      query: (limit) => {
        return limit === undefined ? '/genres' : `/genres?limit=${limit}`
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map((genre) => ({
                type: 'Genres' as const,
                id: genre.genre_id,
              })),
              { type: 'Genres', id: 'LIST' },
            ]
          : [{ type: 'Genres', id: 'LIST' }],
    }),
    patchGenre: builder.mutation<
      IGenre,
      { id: string; body: { genre_ru: string; genre_en: string } }
    >({
      query: ({ id, body }) => ({
        url: `/genres/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
        body,
      }),
      invalidatesTags: [{ type: 'Genres', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetGenresQuery,
  usePatchGenreMutation,
  util: { getRunningQueriesThunk },
} = genresApi

export const { getGenres } = genresApi.endpoints
