import { bindActionCreators } from 'redux'

import Actions from '@/store/actions/actions'

import { makeStore } from './store'

export const getAction = () => {
  return bindActionCreators(Actions, makeStore().dispatch)
}

export const useActions = () => {
  return bindActionCreators(Actions, makeStore().dispatch)
}
