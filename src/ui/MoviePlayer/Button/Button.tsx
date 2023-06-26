import Image from 'next/image'
import { FC } from 'react'

import setting from '@assets/images/player/setting.svg'
import subtitles from '@assets/images/player/subtitles.svg'

import styles from './Button.module.scss'

export interface ButtonProps {
  image: 'setting' | 'subtitles'
}

const images = {
  setting,
  subtitles,
}

export const Button: FC<ButtonProps> = ({ image }) => {
  const setImages = (image: ButtonProps['image']) => images[image]

  return (
    <button className={styles.button}>
      <Image className={styles.image} src={setImages(image)} alt={`${image}`} />
    </button>
  )
}
