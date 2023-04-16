import { FC, MouseEventHandler, useRef } from 'react'

import styles from './MoviePlayer.module.scss'

export interface MoviePlayerProps {
  videoSrc: string
  posterSrc?: string
}

export const MoviePlayer: FC<MoviePlayerProps> = ({ videoSrc, posterSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const playClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    videoRef.current?.play()
  }

  return (
    <div className={styles.moviePlayer}>
      <video
        ref={videoRef}
        className={styles.player}
        preload="none"
        poster={posterSrc}
      >
        <source src={videoSrc} />
      </video>

      <button className={styles.playButton} onClick={playClickHandler}>
        Play
      </button>
    </div>
  )
}
