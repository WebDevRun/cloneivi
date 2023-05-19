import { FC } from 'react'

import { INameIcons, INameIconsExt } from '@/types/Icons'

import { names } from './icons'

interface SvgProps {
  size?: 'small' | 'middle' | 'big' | 'large'
  icon: INameIcons | INameIconsExt
  ext?: true | false
}

export const Svg: FC<SvgProps> = ({ size = 'middle', icon, ext = false }) => {
  const sz = {
    small: 16,
    middle: 20,
    big: 32,
    large: 64,
  }

  return (
    <>
      {!ext && (
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width={sz[size]}
          height={sz[size]}
          viewBox='0 0 32 32'
        >
          {names[icon as INameIcons]}
        </svg>
      )}
      {ext && <>{names[icon as INameIconsExt]}</>}
    </>
  )
}
