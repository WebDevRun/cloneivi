import { FC } from 'react'

import styles from './ArrowSvg.module.scss'

interface ArrowSvgProps {
  color?: string
  direction?: 'top' | 'left' | 'bottom' | 'right'
  size: 'small' | 'big'
}

export const ArrowSvg: FC<ArrowSvgProps> = ({ color = '#fff', direction = 'right', size }) => {

  return (
    <svg version='1.1'
         xmlns='http://www.w3.org/2000/svg'
         height={size === 'small' ? 16 : size === 'big' ? 32 : 0} viewBox='0 0 12 32'
         fill={color}
         className={styles[direction]}
    >
      <path
        d='M3.197 32l-3.197-1.95 8.28-14.066-8.28-14.034 3.197-1.95 8.28 14.034q0.511 0.927 0.511 1.966t-0.511 1.966z'>
      </path>
    </svg>


  )
}