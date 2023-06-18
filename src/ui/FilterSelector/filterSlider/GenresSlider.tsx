import { FC } from 'react'

import { IFilterCategory, ILocaleFilterItem } from '@/types/filter'
import { ILocaleGenre } from '@/types/movie'
import { Slider } from '@components/Slider'
import { SliderButton } from '@ui/SliderButton/SliderButton'

interface GenresSliderProps {
  genres: ILocaleGenre[]
  onClick: (
    currentFilter: ILocaleFilterItem,
    category: IFilterCategory,
  ) => void
  selectedGenres: ILocaleGenre[]
}

const GenresSlider: FC<GenresSliderProps> = ({ genres, onClick, selectedGenres }) => {
  return (
    <div style={{ paddingLeft: 12, paddingRight: 12 }}>
      <Slider
        Component={SliderButton}
        items={genres}
        onItemClick={(item) => onClick(item, 'genre')}
        componentSetting={{
          type: 'square',
          style: 'outline',
          selected: selectedGenres,
        }}
      />
    </div>
  )
}

export default GenresSlider