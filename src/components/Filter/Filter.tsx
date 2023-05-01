import { FC, useState } from 'react'

import { COUNTRIES, GENRES, RATINGS, YEARS } from '@/utils/consts'
import { FilterSvg } from '@assets/svg/FilterSvg/FilterSvg'
import { FilterSelector } from '@ui/FilterSelector'

import styles from './Filter.module.scss'
import { IActiveFilterModal } from '@/types/filter'

export const Filter: FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedCounties, setSelectedCountries] = useState<string[]>([])
  const [selectedYear, setSelectedYear] = useState<number>(-1)
  const [selectedRating, setSelectedRating] = useState<number>(-1)
  const [activeModal, setActiveModal] = useState<IActiveFilterModal>('')

  const clearFilters = () => {
    setSelectedGenres([])
    setSelectedCountries([])
    setSelectedYear(-1)
    setSelectedRating(-1)
    setActiveModal('')
  }

  return (
    <div className={styles.filter}>
      <div className={styles.selectors}>
        <FilterSelector
          title='Жанры'
          selectedItems={selectedGenres}
          setSelectedItems={setSelectedGenres}
          position={'left'}
          items={GENRES}
          modalSize={'big'}
          category={'genre'}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        <FilterSelector
          title='Страны'
          selectedItems={selectedCounties}
          setSelectedItems={setSelectedCountries}
          position={'center'}
          items={COUNTRIES}
          modalSize={'big'}
          category={'country'}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        <FilterSelector
          title='Годы'
          selectedItems={selectedYear}
          setSelectedItems={setSelectedYear}
          items={YEARS}
          modalSize={'small'}
          category={'year'}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        <FilterSelector
          title='Рейтинг Иви'
          selectedItems={selectedRating}
          setSelectedItems={setSelectedRating}
          items={RATINGS}
          modalSize={'small'}
          category={'rating'}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      </div>
      <div className={styles.subFilters}>
        <div style={{height: 35, background: '#000', width: 130}}></div>
        <div style={{height: 35, background: '#000', width: 130}}></div>
        <div style={{height: 35, background: '#000', width: 130}}></div>
        <div style={{height: 35, background: '#000', width: 130}}></div>
      </div>
      <button className={styles.clearButton} onClick={clearFilters}>
        <FilterSvg icon={'close'} />
        <span>Сбросить фильтры</span>
      </button>
    </div>
  )
}
