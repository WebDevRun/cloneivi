import { FC } from 'react'

import { INameIcons } from '@/types/Icons'

import { names } from './icons'

interface SvgProps {
  size?: 'small' | 'middle' | 'big'
  icon: INameIcons
}

export const Svg: FC<SvgProps> = ({ size = 'middle', icon }) => {
  const sz = {
    small: 16,
    middle: 20,
    big: 32,
  }

  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width={sz[size]}
      height={sz[size]}
      viewBox='0 0 32 32'
    >
      {names[icon]}
    </svg>
  )
}
