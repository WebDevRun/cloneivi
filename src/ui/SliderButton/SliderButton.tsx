import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import styles from './SliderButton.module.scss'

export interface SliderButtonProps {
  text?: string
  iconSrc?: string
  iconAlt?: string
  type: 'square' | 'circle'
  style: 'fill' | 'outline'
}

export const SliderButton: FC<SliderButtonProps> = ({ type, text, style, iconSrc, iconAlt }) => {
  return (
    <div className={cn(styles.sliderButton, styles[type], styles[style])}
    >
      {iconSrc && iconAlt && <Image className={styles.image} width={32} height={32} src={iconSrc} alt={iconAlt} />}
      <div>{text}</div>
    </div>
  )
}
