import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from '@/store/reducers'

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

const makeStore = () => store

export const wrapper = createWrapper(makeStore)
