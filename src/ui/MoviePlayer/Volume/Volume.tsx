import Image from 'next/image'
import {
  Dispatch,
  FC,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState,
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
  const [hoverVolume, setHoverVolume] = useState(0)
  const [selectedRange, setSelectedRange] = useState(volume)
  const tempVolume = useRef(0)
  const hoverRangeRef = useRef<HTMLDivElement>(null)
  const selectedRangeRef = useRef<HTMLDivElement>(null)
  const hoverRangeValueRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const hoverRangeElement = hoverRangeRef.current
    const hoverRangeValueElement = hoverRangeValueRef.current

    if (hoverRangeElement === null || hoverRangeValueElement == null) return

    hoverRangeElement.style.width = `${hoverVolume * 100}%`
    hoverRangeValueElement.style.left = `${hoverVolume * 100}%`
  }, [hoverVolume])

  useEffect(() => {
    const element = selectedRangeRef.current
    if (element === null) return

    setVolume(selectedRange)
    element.style.width = `${selectedRange * 100}%`
  }, [selectedRange, setVolume])

  const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (volume === 0) {
      setVolume(tempVolume.current)
      return
    }

    tempVolume.current = volume
    setVolume(0)
  }

  const rangeMouseMoveHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    const offsetWidth = event.currentTarget.offsetWidth
    const offsetX = event.nativeEvent.offsetX
    const volume = Math.round((offsetX / offsetWidth) * 100) / 100

    setHoverVolume(volume)
  }

  const rangeMouseLeaveHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    setHoverVolume(0)
  }

  const rangeClickHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    const offsetWidth = event.currentTarget.offsetWidth
    const offsetX = event.nativeEvent.offsetX
    const volume = Math.round((offsetX / offsetWidth) * 100) / 100

    setSelectedRange(volume)
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

      <div
        className={styles.range}
        onMouseMove={rangeMouseMoveHandler}
        onMouseLeave={rangeMouseLeaveHandler}
        onClick={rangeClickHandler}
      >
        <div className={styles.rangeTrack}></div>
        <div ref={selectedRangeRef} className={styles.selectedRange}></div>
        <div ref={hoverRangeRef} className={styles.hoverRange}>
          <p ref={hoverRangeValueRef} className={styles.hoverRangeValue}>
            {Math.round(hoverVolume * 100)}
          </p>
        </div>
      </div>
    </div>
  )
}
