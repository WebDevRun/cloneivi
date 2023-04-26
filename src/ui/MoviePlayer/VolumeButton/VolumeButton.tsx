import Image from 'next/image'
import { Dispatch, FC, MouseEventHandler, SetStateAction, useRef } from 'react'

import volumeMax from '@assets/images/player/volume-max.svg'
import volumeMid from '@assets/images/player/volume-mid.svg'
import volumeMin from '@assets/images/player/volume-min.svg'
import volumeOff from '@assets/images/player/volume-off.svg'

import styles from './VolumeButton.module.scss'

export interface VolumeButtonProps {
  volume: number
  setVolume: Dispatch<SetStateAction<number>>
}

export const VolumeButton: FC<VolumeButtonProps> = ({ volume, setVolume }) => {
  const tempVolume = useRef(0)

  const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (volume === 0) {
      setVolume(tempVolume.current)
      return
    }

    tempVolume.current = volume
    setVolume(0)
  }

  const setVolumeImage = (volume: number) => {
    if (volume > 0 && volume < 0.2) return volumeMin
    if (volume >= 0.2 && volume < 0.8) return volumeMid
    if (volume >= 0.8) return volumeMax
    return volumeOff
  }

  return (
    <button className={styles.volumeButton} onClick={buttonClickHandler}>
      <Image
        className={styles.image}
        src={setVolumeImage(volume)}
        alt='volume'
      />
    </button>
  )
}
