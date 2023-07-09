import { FC } from 'react'

export interface FilterSvgProps {
  icon: 'close'
  size?: number
  color?: string
}

export const FilterSvg: FC<FilterSvgProps> = ({icon, size = 16, color= '#fff'}) => {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill={color} viewBox='0 0 32 32'>
      {
        icon === 'close' &&
        <path
          d='M4.891 1.151q-0.511-0.511-1.183-0.687t-1.359 0-1.199 0.687-0.687 1.199 0 1.359 0.687 1.183l11.093 11.125-11.093 11.093q-0.767 0.767-0.767 1.87t0.767 1.87 1.87 0.767 1.87-0.767l11.125-11.093 11.093 11.093q0.512 0.512 1.183 0.687t1.359 0 1.199-0.687 0.687-1.199 0-1.359-0.687-1.183l-11.093-11.093 11.093-11.125q0.512-0.511 0.687-1.183t0-1.359-0.687-1.199-1.199-0.687-1.359 0-1.183 0.687l-11.093 11.093z'></path>
      }
    </svg>
  )
}