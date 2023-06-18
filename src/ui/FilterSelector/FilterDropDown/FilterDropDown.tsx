import { FC, ReactNode } from 'react'

import {
  IFilter,
  IFilterCategory,
  IFilterPosition,
  ILocaleFilterItem,
  ILocaleFilterItems,
} from '@/types/filter'
import { getFilterName } from '@/utils/functions/getFilter'
import { DropDownLayout } from '@layouts/DropDownLayout'
import { Select } from '@ui/Select'

import styles from './FilterDropDown.module.scss'

export interface FilterDropDownProps {
  size: 'big' | 'small'
  position?: IFilterPosition
  slider?: ReactNode
  allFilters: ILocaleFilterItems
  category: IFilterCategory
  selectedFilters: ILocaleFilterItems
  filterRedirect: (
    currentFilter: ILocaleFilterItem,
    category: IFilterCategory,
  ) => void
}

export const FilterDropDown: FC<FilterDropDownProps> = ({
  size,
  position,
  slider,
  allFilters,
  category,
  selectedFilters,
  filterRedirect,
}) => {

  const isChecked = (filter: IFilter) => {
    return selectedFilters.some(f => f.slug === filter.slug)
  }

  return (
    <DropDownLayout size={size} position={position || 'left'} type={'filter'} zIndex={9}>
      {
        size === 'big' && slider &&
        <>
          {slider}
          <div className={styles.underLine} />
        </>
      }
      <div className={styles[size]}>
        {
          allFilters.map((item, index) => (
            <div key={index}>
              <Select
                type={size === 'big' ? 'checkbox' : 'radio'}
                name={getFilterName(item, category)}
                category={category}
                checked={isChecked(item)}
                onClick={() => filterRedirect(item, category)}
              />
            </div>
          ))
        }
      </div>
    </DropDownLayout>
  )
}
