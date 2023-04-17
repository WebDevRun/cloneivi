import Image from 'next/image'
import {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'

import fullscreenToClose from '../../assets/images/player/fullscreen-to-close.svg'
import fullscreenToOpen from '../../assets/images/player/fullscreen-to-open.svg'
import play from '../../assets/images/player/play.svg'

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

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (playStatus === 'play') {
      videoRef.current?.play()
      setIsFirstPlay(false)
    }
  }, [playStatus])

  useEffect(() => {
    const toogleFullscreen = async () => {
      await videoRef.current?.requestFullscreen()
    }

    if (isFullscreen !== undefined) toogleFullscreen()
  }, [isFullscreen])

  const playButtonClickHandler: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setPlayStatus('play')
  }

  const fullscreenCheckboxChangeHandler: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setIsFullscreen(true)
  }

  return (
    <div className={styles.moviePlayer}>
      <video
        ref={videoRef}
        className={styles.player}
        preload="none"
        poster={posterSrc}
        // controls={true} // to delete
      >
        <source src={videoSrc} />
      </video>

      {playStatus === 'stop' && isFirstPlay && (
        <button className={styles.playButton} onClick={playButtonClickHandler}>
          <Image className={styles.playImage} src={play} alt="play" />
        </button>
      )}

      <label className={styles.fullscreenConatiner}>
        <input
          className={styles.fullscreenCheckbox}
          type="checkbox"
          checked={isFullscreen}
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
