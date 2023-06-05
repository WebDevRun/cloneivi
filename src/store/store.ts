import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { filmsApi } from './endpoints/films'
import { genresApi } from './endpoints/genres'

export const makeStore = () =>
  configureStore({
    reducer: {
      [filmsApi.reducerPath]: filmsApi.reducer,
      [genresApi.reducerPath]: genresApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(filmsApi.middleware, genresApi.middleware),
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore)
