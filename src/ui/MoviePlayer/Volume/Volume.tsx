import Image from 'next/image'
import {
  ChangeEventHandler,
  Dispatch,
  FC,
  MouseEventHandler,
  SetStateAction,
  useRef,
} from 'react'

import volumeMax from '@assets/images/player/volume-max.svg'
import volumeMid from '@assets/images/player/volume-mid.svg'
import volumeMin from '@assets/images/player/volume-min.svg'
import volumeOff from '@assets/images/player/volume-off.svg'

import styles from './Volume.module.scss'

export interface VolumeProps {
  volume: number
  setVolume: Dispatch<SetStateAction<number>>
}

export const Volume: FC<VolumeProps> = ({ volume, setVolume }) => {
  const tempVolume = useRef(0)

  const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (volume === 0) {
      setVolume(tempVolume.current)
      return
    }

    tempVolume.current = volume
    setVolume(0)
  }

  const rangeHoverHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    console.dir(event)
    // setVolume(parseFloat(event.currentTarget))
  }

  const setVolumeImage = (volume: number) => {
    if (volume > 0 && volume < 0.2) return volumeMin
    if (volume >= 0.2 && volume < 0.8) return volumeMid
    if (volume >= 0.8) return volumeMax
    return volumeOff
  }

  return (
    <div className={styles.volume}>
      <button className={styles.button} onClick={buttonClickHandler}>
        <Image
          className={styles.image}
          src={setVolumeImage(volume)}
          alt="volume"
        />
      </button>

      <div className={styles.range}>
        <div className={styles.selectedRange}></div>
        <div
          className={styles.hoverRange}
          onMouseMove={rangeHoverHandler}
        ></div>
      </div>
    </div>
  )
}
