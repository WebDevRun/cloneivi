import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import { IGenres } from '@/types/genres'
import add from '@assets/images/filter/filter-add.svg'
import remove from '@assets/images/filter/filter-remove.svg'
import { GenresSvg } from '@assets/svg/GenresSvg/GenresSvg'

import styles from './SliderButton.module.scss'

export interface SliderButtonProps {
  name: string
  type: 'square' | 'circle'
  style: 'fill' | 'outline' | 'active'
}

export const SliderButton: FC<SliderButtonProps> = ({
  type = 'square',
  name = 'anime',
  style = 'outline',
}) => {
  return (
    <div className={cn( styles.sliderButton, styles[type] )}>
      <div className={styles[style]}>
        {type === 'square' &&
          <GenresSvg icon={name as IGenres} iconType={style === 'fill' ? 'twoTone' : 'outlined'} size={32} />
        }
        {
          type === 'circle' && style === 'active' &&
          <Image width={11} height={11} src={remove} alt='remove' />
        }
        {
          type === 'circle' && style === 'outline' &&
          <Image width={11} height={11} src={add} alt='add' />
        }

        <div className={styles.name}>{name}</div>
      </div>
    </div>
  )
}
