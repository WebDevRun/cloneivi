import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { IComment } from '@/types/comments'

const url = process.env.NEXT_PUBLIC_API_URL
const token = process.env.NEXT_PUBLIC_TOKEN

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  tagTypes: ['Comments'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getComments: builder.query<IComment[], string>({
      query: (id) => `/comments/films/${id}`,
      providesTags: () => [{ type: 'Comments' }],
    }),
    addComment: builder.mutation<
      IComment,
      {
        text: string
        film_id: string
        parent_id: string | null
        user_id: string
      }
    >({
      query: (body) => ({
        url: '/comments',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: () => [{ type: 'Comments' }],
    }),
  }),
})

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  util: { getRunningQueriesThunk },
} = commentsApi

export const { getComments } = commentsApi.endpoints
