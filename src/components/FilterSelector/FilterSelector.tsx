import { FC, useState } from 'react'

import { FilterDropDown } from '@ui/FilterDropDown'
import { FilterSelectorButton } from '@ui/FilterSelectorButton'

import styles from './FilterSelector.module.scss'

export interface FilterSelectorProps {
  name: string
  selectedItems: string[]
  setSelectedItems: () => void
  position: 'left' | 'center' | 'right'
}

export const FilterSelector: FC<FilterSelectorProps> = ({setSelectedItems, selectedItems, name, position}) => {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.filterSelector}>
      <FilterSelectorButton name={name} active={active} setActive={setActive} selectedItems={selectedItems} />
      {active && <FilterDropDown size={'small'} position={position} slider={<div>asd</div>} />}
    </div>
  )
}