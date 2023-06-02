import { combineReducers } from 'redux'

import { filterReducer } from '@/store/reducers/filterReducer'

export const rootReducer = combineReducers({
  filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>