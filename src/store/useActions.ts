import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import Actions from '@/store/actions/actions'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(Actions, dispatch)
}