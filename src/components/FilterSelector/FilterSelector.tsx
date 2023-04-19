import { Dispatch, FC, SetStateAction, useState } from 'react'

import { FilterSelectorButton } from '@ui/FilterSelectorButton'

import styles from './FilterSelector.module.scss'


export interface FilterSelectorProps {
  name: string
  selectedItems: string[]
  setSelectedItems: () => void
}

export const FilterSelector: FC<FilterSelectorProps> = ({ setSelectedItems, selectedItems, name }) => {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.filterSelector}>
      <FilterSelectorButton name={name} active={active} setActive={setActive} selectedItems={selectedItems} />

    </div>
  )
}