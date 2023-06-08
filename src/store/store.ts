import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { commentsApi } from './endpoints/comments'
import { filmsApi } from './endpoints/films'

const rootReducer = combineReducers({
  [filmsApi.reducerPath]: filmsApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
})

const middlewares = [filmsApi.middleware, commentsApi.middleware]

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  })

export type AppStore = ReturnType<typeof setupStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper<AppStore>(setupStore)
