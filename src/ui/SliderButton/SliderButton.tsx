import cn from 'classnames'
import Image from 'next/image'
import { FC, useEffect } from 'react'

import styles from './SliderButton.module.scss'
import { GenresSvg } from '@assets/svg/GenresSvg/GenresSvg'

export interface SliderButtonProps {
  name: string
  type: 'square' | 'circle'
  style: 'fill' | 'outline'
  iconSrc?: 'string'
  iconAlt?: 'string'
}

export const SliderButton: FC<SliderButtonProps> = ({type, iconSrc, name, style, iconAlt}) => {
  return (
    <div className={cn( styles.sliderButton, styles[type] )} >
      <div className={styles[style]}>
        {iconSrc && iconAlt
          ? <Image className={styles.image} width={32} height={32} src={iconSrc} alt={iconAlt} />
          : <div className={styles.image}>
            <GenresSvg icon={name} iconType={style === 'fill' ? 'twoTone' : 'outlined'} size={32} />
          </div>
        }
        <div>{name}</div>
      </div>
    </div>
  )
}
