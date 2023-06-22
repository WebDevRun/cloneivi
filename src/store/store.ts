import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { authorizationApi } from './endpoints/authorization'
import { filmsApi } from './endpoints/films'

export const store = () =>
  configureStore({
    reducer: {
      [filmsApi.reducerPath]: filmsApi.reducer,
      [authorizationApi.reducerPath]: authorizationApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        filmsApi.middleware,
        authorizationApi.middleware,
      ),
  })

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(store)
