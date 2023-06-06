import {
  Action,
  combineReducers,
  configureStore,
  PreloadedState,
  StateFromReducersMapObject,
  ThunkAction,
} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { filmsApi } from './endpoints/films'
import { genresApi } from './endpoints/genres'

const rootReducer = combineReducers({
  [filmsApi.reducerPath]: filmsApi.reducer,
  [genresApi.reducerPath]: genresApi.reducer,
})

const middlewares = [filmsApi.middleware, genresApi.middleware]

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(setupStore)
