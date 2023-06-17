import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

const url = process.env.NEXT_PUBLIC_API_URL

export const authorizationApi = createApi({
  reducerPath: 'authorizationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ['authorization'],
  endpoints: (builder) => ({
    isAuth: builder.query<boolean, void>({
      query: () => ({
        url: '/isauth',
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['authorization'],
    }),
    login: builder.mutation<string, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: '/login',
        method: 'POST',
        body: {
          email,
          password,
        },
        credentials: 'include',
      }),
      invalidatesTags: ['authorization'],
    }),
  }),
})

export const {
  useIsAuthQuery,
  useLoginMutation,
  util: { getRunningQueriesThunk },
} = authorizationApi

export const { login } = authorizationApi.endpoints
