import { FC } from 'react'

import { IFilterCategory, ILocaleFilterItem } from '@/types/filter'
import { ICountry, ILocaleGenre } from '@/types/movie'
import { Slider } from '@components/Slider'
import { SliderButton } from '@ui/SliderButton/SliderButton'

interface GenresSliderProps {
  countries: ICountry[]
  onClick: (
    currentFilter: ILocaleFilterItem,
    category: IFilterCategory,
  ) => void
  selectedCountries: ICountry[]
}

const CountriesSlider: FC<GenresSliderProps> = ({ countries, onClick, selectedCountries }) => {
  return (
    <div style={{ paddingLeft: 12, paddingRight: 12 }}>
      <Slider
        Component={SliderButton}
        items={countries}
        onItemClick={(item) => onClick(item as ILocaleFilterItem, 'country')}
        componentSetting={{
          type: 'circle',
          style: 'outline',
          selected: selectedCountries,
        }}
        isCrop={false}
      />
    </div>
  )
}

export default CountriesSlider