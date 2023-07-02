import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { IPerson } from '@/types/person'

export const personsApi = createApi({
  reducerPath: 'personsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ['Persons'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getPersons: builder.query<IPerson[], number | void>({
      query: (limit) => {
        return limit === undefined ? '/persons' : `/persons?limit=${limit}`
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map((person) => ({
                type: 'Persons' as const,
                id: person.person_id,
              })),
              { type: 'Persons', id: 'LIST' },
            ]
          : [{ type: 'Persons', id: 'LIST' }],
    }),
    getPersonById: builder.query<IPerson, string>({
      query: (id) => `/persons/${id}`,
      providesTags: (result, error, id) => [{ type: 'Persons', id }],
    }),
    getPersonsFromFilm: builder.query<IPerson[], string>({
      query: (id) => `/persons/films/${id}`,
      providesTags: (result, error, id) => [{ type: 'Persons', id }],
    }),
  }),
})

export const {
  useGetPersonsQuery,
  useGetPersonByIdQuery,
  useGetPersonsFromFilmQuery,
  util: { getRunningQueriesThunk },
} = personsApi

export const { getPersons, getPersonById, getPersonsFromFilm } =
  personsApi.endpoints
