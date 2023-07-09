import { FC, cloneElement } from 'react'

import { INameIcons, INameIconsExt, IconSize } from '@/types/Icons'

import { names } from './icons'

interface SvgProps {
  size?: IconSize
  icon: INameIcons | INameIconsExt
  ext?: boolean
  fill?: string
}

export const Svg: FC<SvgProps> = ({
  size = 'middle',
  icon,
  ext = false,
  fill = '#ffffff',
}) => {
  const sz = {
    none: 'none',
    small: 16,
    middle: 20,
    big: 32,
    large: 56,
  }
  return (
    <>
      {!ext && (
        <>
          {size !== 'unset' && (
            <svg
              fill={fill}
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              width={sz[size]}
              height={sz[size]}
              viewBox={`0 0 32 32`}
            >
              {names[icon as INameIcons]}
            </svg>
          )}
          {size === 'unset' && (
            <svg
              fill={fill}
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox={`0 0 32 32`}
            >
              {names[icon as INameIcons]}
            </svg>
          )}
        </>
      )}
      {ext && (
        <>
          {size !== 'unset' &&
            cloneElement(names[icon as INameIconsExt], {
              width: sz[size],
              height: sz[size],
              fill: fill,
            })}
          {size === 'unset' &&
            cloneElement(names[icon as INameIconsExt], {
              fill: fill,
            })}
        </>
      )}
    </>
  )
}

