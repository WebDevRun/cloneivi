import cn from 'classnames'
import Image from 'next/image'
import {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'

import fullscreenToClose from '@assets/images/player/fullscreen-to-close.svg'
import fullscreenToOpen from '@assets/images/player/fullscreen-to-open.svg'
import play from '@assets/images/player/play.svg'

import styles from './MoviePlayer.module.scss'

export interface MoviePlayerProps {
  videoSrc: string
  posterSrc?: string
}

type playStatusTypes = 'play' | 'pause' | 'stop'
type isFullscreenTypes = boolean | undefined

export const MoviePlayer: FC<MoviePlayerProps> = ({ videoSrc, posterSrc }) => {
  const [isFirstPlay, setIsFirstPlay] = useState(true)
  const [playStatus, setPlayStatus] = useState<playStatusTypes>('stop')
  const [isFullscreen, setIsFullscreen] = useState<isFullscreenTypes>(undefined)

  const videoLayout = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (playStatus === 'play') {
      videoRef.current?.play()
      setIsFirstPlay(false)
    }
  }, [playStatus])

  useEffect(() => {
    const setFullscreen = async () => {
      await videoLayout.current?.requestFullscreen()
    }
    const exitFullscreen = async () => {
      await document.exitFullscreen()
    }

    if (isFullscreen === true) setFullscreen()
    if (isFullscreen === false) exitFullscreen()
  }, [isFullscreen])

  const playButtonClickHandler: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setPlayStatus('play')
  }

  const fullscreenCheckboxChangeHandler: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setIsFullscreen((prev) => !prev)
  }

  return (
    <div ref={videoLayout} className={styles.moviePlayer}>
      <video
        ref={videoRef}
        className={styles.player}
        preload="none"
        poster={posterSrc}
      >
        <source src={videoSrc} />
      </video>

      {playStatus === 'stop' && isFirstPlay && (
        <button className={styles.playButton} onClick={playButtonClickHandler}>
          <Image className={styles.playImage} src={play} alt="play" />
        </button>
      )}

      {playStatus === 'stop' && !isFirstPlay && (
        <button className={styles.playButton} onClick={playButtonClickHandler}>
          <Image className={styles.playImage} src={play} alt="play" />
        </button>
      )}

      <label className={styles.fullscreenConatiner}>
        <input
          className={styles.fullscreenCheckbox}
          type="checkbox"
          onChange={fullscreenCheckboxChangeHandler}
        />
        <Image
          className={styles.fullscreenImage}
          src={isFullscreen ? fullscreenToClose : fullscreenToOpen}
          alt={isFullscreen ? 'fullscreenToClose' : 'fullscreenToOpen'}
        />
      </label>
    </div>
  )
}
