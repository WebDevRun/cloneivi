import cn from 'classnames'
import { FC } from 'react'

import { IGenres } from '@/types/genres'
import { ICountry, ILocaleGenre } from '@/types/movie'
import { GenresSvg } from '@assets/svg/GenresSvg/GenresSvg'

import styles from './SliderButton.module.scss'

export interface SliderButtonProps {
  type?: 'square' | 'circle'
  style?: 'fill' | 'outline'
  genre_name?: string
  genre_id?: string
  slug: string
  country_id?: string
  selected?: ILocaleGenre[] | ICountry[],
  country: string
}

export const SliderButton: FC<SliderButtonProps> = ({
  type = 'square',
  style = 'outline',
  slug,
  genre_name = '',
  selected = [],
  genre_id = '',
  country_id = '',
  country,
}) => {
  const isActive = type === 'square'
    ? (selected as ILocaleGenre[]).some(genre => genre.genre_id === genre_id)
    : (selected as ICountry[]).some(country => country.country_id === country_id)

  return (
    <div className={cn(styles.sliderButton, styles[type])}>
      <div className={isActive ? styles.active : styles[style]}>
        {type === 'square' &&
          <GenresSvg icon={slug as IGenres} iconType={style === 'fill' ? 'twoTone' : 'outlined'} size={32} />
        }
        <div className={styles.name}>{type === 'square' ? genre_name : country}</div>
      </div>
    </div>
  )
}
