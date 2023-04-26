import { FC, ReactNode } from 'react'

import { DropDownLayout } from '@layouts/DropDownLayout'

import styles from './FilterDropDown.module.scss'

export interface FilterDropDownProps {
  size: 'big' | 'small'
  position: 'left' | 'center' | 'right'
  slider: ReactNode,

}

export const FilterDropDown: FC<FilterDropDownProps> = ({size, position}) => {
  return (
    <DropDownLayout size={size} position={position} type={'filter'}>
      sdasdad
    </DropDownLayout>
  )
}
