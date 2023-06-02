import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

const url = process.env.NEXT_PUBLIC_API_URL

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
  // endpoints: (builder) => ({
  //   getPokemonByName: builder.query<
  //     { species: { name: string }; sprites: { front_shiny: string } },
  //     string
  //   >({
  //     query: (name) => `pokemon/${name}`,
  //   }),
  //   getPokemonList: builder.query<{ results: Array<{ name: string }> }, void>({
  //     query: () => `pokemon/`,
  //   }),
  // }),
})

// export const {
//   useGetPokemonByNameQuery,
//   useGetPokemonListQuery,
//   util: { getRunningQueriesThunk },
// } = pokemonApi

// export const { getPokemonByName, getPokemonList } = pokemonApi.endpoints
