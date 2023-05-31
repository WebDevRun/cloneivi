import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { IActiveFilterModal, IFilterSettings } from '@/types/filter'
import { COUNTRIES, GENRES, RATINGS, YEARS } from '@/utils/consts'
import { FilterSvg } from '@assets/svg/FilterSvg/FilterSvg'
import { FilterSelector } from '@ui/FilterSelector'

import styles from './Filter.module.scss'

export const Filter: FC = () => {
  const [filterSettings, setFilterSettings] = useState<IFilterSettings | null>(null)
  const [activeModal, setActiveModal] = useState<IActiveFilterModal>('')
  const {query} = useRouter()

  useEffect(() => {
    const {params, rating} = query
    const settings: IFilterSettings = {
      genre: [],
      country: [],
      year: -1,
      rating: -1,
    }

    if (params && Array.isArray(params)) {
      params.forEach(parameter => {
        const items = GENRES.filter((genre) => genre.slug === parameter)
        if (items.length > 0) {
          settings.genre = [...items]
        }
      })

    }

    setFilterSettings(settings)
  }, [query])


  return (
    <div className={styles.filter}>
      <div className={styles.selectors}>
        <FilterSelector
          title='Жанры'
          selectedItems={filterSettings}
          // setSelectedItems={() => {
          // }}
          position={'left'}
          items={GENRES}
          modalSize={'big'}
          category={'genre'}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        <FilterSelector
          title='Страны'
          selectedItems={filterSettings}
          // setSelectedItems={() => {
          // }}
          position={'center'}
          items={COUNTRIES}
          modalSize={'big'}
          category={'country'}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        <FilterSelector
          title='Годы'
          selectedItems={filterSettings}
          // setSelectedItems={() => {
          // }}
          items={YEARS}
          modalSize={'small'}
          category={'year'}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        <FilterSelector
          title='Рейтинг Иви'
          selectedItems={filterSettings}
          // setSelectedItems={() => {
          // }}
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
      <Link href={''} className={styles.clearButton}>
        <FilterSvg icon={'close'} />
        <span>Сбросить фильтры</span>
      </Link>
    </div>
  )
}
