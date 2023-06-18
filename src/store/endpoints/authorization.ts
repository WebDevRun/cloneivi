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
    logout: builder.mutation<number, void>({
      query: () => ({
        url: '/logout',
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['authorization'],
    }),
    refreshToken: builder.mutation<
      { email: string; accessToken: string },
      void
    >({
      query: () => ({
        url: '/refresh',
        method: 'POST',
        credentials: 'include',
      }),
      invalidatesTags: ['authorization'],
    }),
    signup: builder.mutation<
      {
        user_id: string
        email: string
        createdAt: string
        updatedAt: string
        roles: { role_id: string; value: string; description: string }[]
        profile: {
          profile_id: string
          first_name: string
          last_name: string
          phone: string
          city: string
          user_id: string
        } | null
      },
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: '/signup',
        method: 'POST',
        credentials: 'include',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
})

export const {
  useIsAuthQuery,
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useSignupMutation,
  util: { getRunningQueriesThunk },
} = authorizationApi

export const { login, logout, refreshToken, signup } =
  authorizationApi.endpoints
