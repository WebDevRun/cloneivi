import {
  Action,
  combineReducers,
  configureStore,
  PreloadedState,
  StateFromReducersMapObject,
  ThunkAction,
} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { authSlice, authorizationApi } from './endpoints/authorization'
import { filmsApi } from './endpoints/films'
import { genresApi } from './endpoints/genres'

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [filmsApi.reducerPath]: filmsApi.reducer,
  [genresApi.reducerPath]: genresApi.reducer,
  [authorizationApi.reducerPath]: authorizationApi.reducer,
})

const middlewares = [
  filmsApi.middleware,
  genresApi.middleware,
  authorizationApi.middleware,
]

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  })
}

export type AppStore = ReturnType<typeof store>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(store)
