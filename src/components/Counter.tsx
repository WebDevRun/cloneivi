import { useSelector, useDispatch } from 'react-redux'

import { incrementCount, decrementCount, resetCount } from '@/store/actions'
import { Button } from '@/ui/Button'

const Counter = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <Button text='+1' onClick={() => dispatch(incrementCount())} />
      <Button text='-1' onClick={() => dispatch(decrementCount())} />
      <Button text='Reset' onClick={() => dispatch(resetCount())} />
    </div>
  )
}

export default Counter