import { Dispatch, FC, SetStateAction } from 'react'

import {
  IActiveFilterModal,
  IFilterCategory, ILocaleFilterItem, ILocaleFilterItems,
} from '@/types/filter'
import { getFilterName } from '@/utils/functions/getFilter'
import { FilterDropDown } from '@ui/FilterSelector/FilterDropDown'
import { FilterSelectorButton } from '@ui/FilterSelector/FilterSelectorButton'

import styles from './FilterSelector.module.scss'

export interface FilterSelectorProps {
  title: string
  position?: 'left' | 'center' | 'right'
  allFilters: ILocaleFilterItems
  selectedFilters: ILocaleFilterItems
  filterRedirect: (
    currentFilter: ILocaleFilterItem,
    category: IFilterCategory,
  ) => void
  modalSize: 'big' | 'small'
  category: IFilterCategory
  activeModal: IActiveFilterModal
  setActiveModal: Dispatch<SetStateAction<IActiveFilterModal>>
}

export const FilterSelector: FC<FilterSelectorProps> = ({
  position,
  allFilters,
  title,
  modalSize,
  category,
  activeModal,
  setActiveModal,
  selectedFilters,
  filterRedirect
  ,
}) => {
  const getSelectedName = (items: ILocaleFilterItems): string[] => {
    return items.map(item => {
      return getFilterName(item, category)
    })
  }

  return (
    <div className={styles.filterSelector}>
      <FilterSelectorButton
        title={title}
        active={activeModal === category}
        setActive={() => setActiveModal(activeModal === category ? '' : category)}
        selectedItems={getSelectedName(selectedFilters)}
      />
      {
        activeModal === category &&
        <FilterDropDown
          size={modalSize}
          position={position || 'left'}
          // slider={}
          allFilters={allFilters}
          selectedFilters={selectedFilters}
          category={category}
          filterRedirect={filterRedirect}
        />
      }
    </div>
  )
}