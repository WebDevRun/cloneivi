import { FC, ReactNode } from 'react'

import { IFilterCategory, IFilterItems, IFilterPosition } from '@/types/filter'
import { IGenre } from '@/types/Movie'
import { DropDownLayout } from '@layouts/DropDownLayout'
import { Select } from '@ui/Select'

import styles from './FilterDropDown.module.scss'

export interface FilterDropDownProps {
  size: 'big' | 'small'
  position?: IFilterPosition
  slider: ReactNode
  items: IFilterItems
  category: IFilterCategory
  selectedItems: string[] | number
  setSelectedItems: (item: string | number) => void
}

export type IItem = IGenre | string | number

export const FilterDropDown: FC<FilterDropDownProps> = ({
  size,
  position,
  slider,
  items,
  category,
  selectedItems,
  setSelectedItems,
}) => {

  const getName = (item: IItem) => {
    if (typeof item === 'string' || typeof item === 'number') {
      return item
    }

    return item[`${category}_ru`]
  }

  const getChecked = (item: IItem) => {
    if (typeof item === 'number') {
      return item === selectedItems
    }

    if (typeof item === 'string' && typeof selectedItems === 'object') {
      return selectedItems.includes(item)
    }

    if (typeof selectedItems === 'object') {
      return selectedItems.includes(item[`${category}_ru`])
    }
    return false
  }

  return (
    <DropDownLayout size={size} position={position || 'left'} type={'filter'}>
      {
        size === 'big' && slider &&
        <>
          {slider}
          <div className={styles.underLine} />
        </>
      }
      <div className={styles[size]}>
        {
          category === 'year' &&
          <Select
            type={size === 'big' ? 'checkbox' : 'radio'}
            name={'Все годы'}
            category={category}
            checked={selectedItems === -1}
            onClickHandler={setSelectedItems}
            value={-1}
          />
        }
        {
          category === 'rating' &&
          <Select
            type={size === 'big' ? 'checkbox' : 'radio'}
            name={'Любой рейтинг'}
            category={category}
            checked={selectedItems === -1}
            onClickHandler={setSelectedItems}
            value={-1}
          />
        }
        {
          items.map((item, index) => (
            <div key={index}>
              <Select
                type={size === 'big' ? 'checkbox' : 'radio'}
                name={getName(item)}
                category={category}
                checked={getChecked(item)}
                onClickHandler={setSelectedItems}
                value={getName(item)}
              />
            </div>
          ))
        }
      </div>
    </DropDownLayout>
  )
}
