import { FC, ReactNode } from 'react'

import { DropDownLayout } from '@layouts/DropDownLayout'
import { Select } from '@ui/Select'

import styles from './FilterDropDown.module.scss'

export interface FilterDropDownProps {
  size: 'big' | 'small'
  position: 'left' | 'center' | 'right'
  slider: ReactNode
  items: string[]
  name?: string
}

export const FilterDropDown: FC<FilterDropDownProps> = ({
  size,
  position,
  slider,
  items,
  name,
}) => {
  return (
    <DropDownLayout size={size} position={position} type={'filter'}>
      {
        size === 'big' && slider &&
        <>
          {slider}
          <div className={styles.underLine} />
        </>
      }
      <div className={styles[size]}>
        {
          items.map((item, index) => (
            <Select type={size === 'big' ? 'checkbox' : 'radio'} text={item} key={index} name={name || ''} />
          ))
        }
      </div>
    </DropDownLayout>
  )
}
