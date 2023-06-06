import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { filmsApi } from './endpoints/films'
import { genresApi } from './endpoints/genres'

const rootReducer = combineReducers({
  [filmsApi.reducerPath]: filmsApi.reducer,
  [genresApi.reducerPath]: genresApi.reducer,
})

const middleware = [filmsApi.middleware, genresApi.middleware]

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(...middleware),
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(setupStore)
