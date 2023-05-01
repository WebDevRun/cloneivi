import { Dispatch, FC, SetStateAction } from 'react'

import { IActiveFilterModal } from '@/types/filter'
import { IGenre } from '@/types/Movie'
import { FilterDropDown } from '@ui/FilterSelector/FilterDropDown'
import { FilterSelectorButton } from '@ui/FilterSelector/FilterSelectorButton'

import styles from './FilterSelector.module.scss'

export interface FilterSelectorProps {
  title: string
  selectedItems: string[] | number
  setSelectedItems: Dispatch<SetStateAction<string[] | number>>
  position?: 'left' | 'center' | 'right',
  items: IGenre[] | string[] | number[]
  modalSize: 'big' | 'small',
  category: 'genre' | 'country' | 'year' | 'rating'
  activeModal: IActiveFilterModal
  setActiveModal: Dispatch<SetStateAction<IActiveFilterModal>>
}

export const FilterSelector: FC<FilterSelectorProps> = ({
  setSelectedItems,
  selectedItems,
  position,
  items,
  title,
  modalSize,
  category,
  activeModal,
  setActiveModal,
}) => {

  const selectCheckbox = (item: string | number) => {
    if ((category === 'year' || category === 'rating') && typeof item === 'number') {
      setSelectedItems(item)
    }

    if ((category === 'genre' || category === 'country') && typeof selectedItems === 'object' && typeof item === 'string') {
      const id = selectedItems.indexOf(item)

      if (id === -1) {
        selectedItems = [...selectedItems, item]
      } else {
        selectedItems.splice(id, 1)
      }

      setSelectedItems([...selectedItems])
    }
  }

  return (
    <div className={styles.filterSelector}>
      <FilterSelectorButton
        title={title}
        active={activeModal === category}
        setActive={() => setActiveModal(activeModal === category ? '' : category)}
        selectedItems={selectedItems}
      />
      {
        activeModal === category &&
        <FilterDropDown
          size={modalSize}
          position={position || 'left'}
          slider={<div style={{height: 88, background: '#000'}} />}
          items={items}
          category={category}
          selectedItems={selectedItems}
          setSelectedItems={selectCheckbox}
        />
      }
    </div>
  )
}