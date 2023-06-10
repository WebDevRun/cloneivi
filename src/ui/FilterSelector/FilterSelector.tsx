import { Dispatch, FC, SetStateAction } from 'react'

import { IActiveFilterModal, IFilterCategory, IFilterItems, IFilterSettings } from '@/types/filter'
import { IGenre } from '@/types/movie'
import { FilterDropDown } from '@ui/FilterSelector/FilterDropDown'
import { FilterSelectorButton } from '@ui/FilterSelector/FilterSelectorButton'

import styles from './FilterSelector.module.scss'

export interface FilterSelectorProps {
  title: string
  position?: 'left' | 'center' | 'right',
  items: IGenre[] | string[] | number[]
  selectedItems: IFilterSettings | null
  modalSize: 'big' | 'small',
  category: IFilterCategory
  activeModal: IActiveFilterModal
  setActiveModal: Dispatch<SetStateAction<IActiveFilterModal>>
}

export const FilterSelector: FC<FilterSelectorProps> = ({
  position,
  items,
  title,
  modalSize,
  category,
  activeModal,
  setActiveModal,
  selectedItems,
}) => {

  const setFilters = () => {

  }

  const getSelectedName = (): string[] => {
    if (!selectedItems) return []
    const selectedItem = selectedItems[category]

    if (Array.isArray(selectedItem)) {
      // return selectedItem.map(item => item[`${category}_ru`])
    }

    return []
  }


  getSelectedName()
  // const selectCheckbox = (item: string | number) => {
  //   if ((category === 'year' || category === 'rating') && typeof item === 'number') {
  //     setSelectedItems(item)
  //   }
  //
  //   if ((category === 'genre' || category === 'country') && typeof selectedItems === 'object' && typeof item ===
  // 'string') { const id = selectedItems.indexOf(item)  if (id === -1) { selectedItems = [...selectedItems, item] }
  // else { selectedItems.splice(id, 1) }  setSelectedItems([...selectedItems]) } }

  // const getSelectedName = () => {
  //   if (typeof selectedItems === 'number') return
  //
  //   return selectedItems.map(selectedItem => {
  //     const currentItem = items.filter(item => item.slug === selectedItem)[0]
  //     return currentItem[`${category}_ru`]
  //   })
  // }

  return (
    <div className={styles.filterSelector}>
      <FilterSelectorButton
        title={title}
        active={activeModal === category}
        setActive={() => setActiveModal(activeModal === category ? '' : category)}
        selectedItems={getSelectedName()}
      />
      {
        // activeModal === category &&
        // <FilterDropDown
        //   size={modalSize}
        //   position={position || 'left'}
        //   slider={<div style={{height: 88, background: '#000'}} />}
        //   items={items}
        //   category={category}
        //   selectedItems={selectedItems ? selectedItems[category] : []}
        //   setSelectedItems={() => {
        //   }}
        // />
      }
    </div>
  )
}