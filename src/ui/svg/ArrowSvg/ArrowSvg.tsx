import { FC } from 'react'

import styles from './ArrowSvg.module.scss'

interface ArrowSvgProps {
  color?: string
  direction?: 'top' | 'left' | 'bottom' | 'right'
  size?: number
}

export const ArrowSvg: FC<ArrowSvgProps> = ({ color = '#fff', direction = 'right', size = 32 }) => {

  return (
    <svg xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 5.41 9.49'
         height={size}
         fill={color}
         className={styles[direction]}
    >
      <path
        d='M.19,9.3c-.12-.12-.19-.27-.19-.44s.06-.32,.19-.44l3.66-3.66L.18,1.08C.06,.96,0,.81,0,.64c0-.18,.06-.33,.19-.45,.12-.12,.27-.19,.44-.19s.32,.06,.44,.19L5.28,4.4c.05,.05,.09,.1,.11,.16s.03,.12,.03,.19c0,.07-.01,.13-.03,.19s-.06,.11-.11,.16L1.06,9.31c-.12,.12-.26,.18-.43,.18s-.32-.06-.44-.19Z' />
    </svg>
  )
}