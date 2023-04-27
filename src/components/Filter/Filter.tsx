import { FC } from 'react'

import styles from './Filter.module.scss'
import { FilterSelector } from '@ui/FilterSelector'

export interface FilterProps {
}

export const Filter: FC<FilterProps> = () => {
  return (
    <div className={styles.filter}>
      <div>
        <FilterSelector title='Жанры' selectedItems={[]} setSelectedItems={() => {}} position={'left'} items={} modalSize={} />
        <FilterSelector title='Страны' selectedItems={[]} setSelectedItems={() => {}} position={'center'} items={} modalSize={} />
        <FilterSelector title='Годы' selectedItems={[]} setSelectedItems={() => {}} position={} items={''} modalSize={} />
        <FilterSelector title='Рейтинг Иви' selectedItems={[]} setSelectedItems={() => {}} position={} items={} modalSize={} />
      </div>
    </div>
  )
}
