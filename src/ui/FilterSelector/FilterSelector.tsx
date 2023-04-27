import { FC, useState } from 'react'

import { FilterDropDown } from '@ui/FilterSelector/FilterDropDown'
import { FilterSelectorButton } from '@ui/FilterSelector/FilterSelectorButton'

import styles from './FilterSelector.module.scss'

export interface FilterSelectorProps {
  title: string
  selectedItems: string[]
  setSelectedItems: () => void
  position?: 'left' | 'center' | 'right',
  items: string[]
  name?: string,
  modalSize: 'big' | 'small'
}

export const FilterSelector: FC<FilterSelectorProps> = ({setSelectedItems, selectedItems, name, position, items, title, modalSize}) => {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.filterSelector}>
      <FilterSelectorButton title={title} active={active} setActive={setActive} selectedItems={selectedItems} />
      {active && <FilterDropDown size={modalSize} position={position} slider={<div style={{height: 88, background: '#000'}}/>}  name={name || ''} items={items} /> }
    </div>
  )
}