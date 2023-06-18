import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import {
  IActiveFilterModal,
  IFilterCategory,
  ILocaleFilterItem,
  ILocaleFilters,
} from '@/types/filter'
import { ICountry, ILocaleGenre, IRating, IYear } from '@/types/movie'
import { getFiltersUrlQuery } from '@/utils/functions/getFilter'
import { FilterSvg } from '@assets/svg/FilterSvg/FilterSvg'
import { FilterSelector } from '@ui/FilterSelector'

import styles from './Filter.module.scss'

export interface FilterProps {
  selectedFilters: ILocaleFilters
  allFilters: ILocaleFilters
}

export const Filter: FC<FilterProps> = ({ selectedFilters, allFilters }) => {
  const [activeModal, setActiveModal] = useState<IActiveFilterModal>('')
  const router = useRouter()

  const filterRedirect = (
    currentFilter: ILocaleFilterItem,
    category: IFilterCategory,
  ) => {
    switch (category) {
      case 'country':
        const isCountrySelected = selectedFilters.countries
          .some(country => country.slug === currentFilter.slug)
        isCountrySelected
          ? selectedFilters.countries = selectedFilters.countries.filter(country => country.slug !== currentFilter.slug)
          : selectedFilters.countries.push(currentFilter as ICountry)
        break
      case 'year':
        const isYearSelected = selectedFilters.years
          .some(year => year.slug === currentFilter.slug)
        isYearSelected
          ? selectedFilters.years = []
          : selectedFilters.years = [currentFilter as IYear]
        break
      case 'rating':
        const isRatingSelected = selectedFilters.rating
          .some(rate => rate.slug === currentFilter.slug)
        isRatingSelected
          ? selectedFilters.rating = []
          : selectedFilters.rating = [currentFilter as IRating]
        break
      case 'genre':
        const isGenreSelected = selectedFilters.genres
          .some(genre => genre.slug === currentFilter.slug)
        isGenreSelected
          ? selectedFilters.genres = selectedFilters.genres.filter(genre => genre.slug !== currentFilter.slug)
          : selectedFilters.genres.push(currentFilter as ILocaleGenre)
        break
    }

    const selectedGenres = getFiltersUrlQuery(selectedFilters.genres, 'genre')
    const selectedCountries = getFiltersUrlQuery(selectedFilters.countries, 'country')
    const selectedYears = getFiltersUrlQuery(selectedFilters.years, 'year')
    const selectedRating = getFiltersUrlQuery(selectedFilters.rating, 'rating')

    router.push(`/movies${selectedGenres}${selectedCountries}${selectedYears}${selectedRating}`)
    setActiveModal('')
  }

  return (
    <div className={styles.filter}>
      <div className={styles.selectors}>
        <FilterSelector
          title='Жанры'
          selectedFilters={selectedFilters.genres}
          filterRedirect={filterRedirect}
          position={'left'}
          allFilters={allFilters.genres}
          modalSize={'big'}
          category={'genre'}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        <FilterSelector
          title='Страны'
          selectedFilters={selectedFilters.countries}
          filterRedirect={filterRedirect}
          position={'center'}
          allFilters={allFilters.countries}
          modalSize={'big'}
          category={'country'}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        <FilterSelector
          title='Годы'
          selectedFilters={selectedFilters.years}
          filterRedirect={filterRedirect}
          allFilters={allFilters.years}
          modalSize={'small'}
          category={'year'}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        <FilterSelector
          title='Рейтинг Иви'
          selectedFilters={selectedFilters.rating}
          filterRedirect={filterRedirect}
          allFilters={allFilters.rating}
          modalSize={'small'}
          category={'rating'}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      </div>
      <Link href={''} className={styles.clearButton}>
        <FilterSvg icon={'close'} />
        <span>Сбросить фильтры</span>
      </Link>
    </div>
  )
}
