import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from '@/store/reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk))

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);