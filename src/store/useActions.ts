import { bindActionCreators } from 'redux'

import Actions from '@/store/actions/actions'
import { store } from '@/store/index'

export const getAction = () => {
  return bindActionCreators(Actions, store.dispatch)
}

export const useActions = () => {
  return bindActionCreators(Actions, store.dispatch)
}