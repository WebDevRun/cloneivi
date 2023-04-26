import cn from 'classnames'
import Image from 'next/image'
import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'

import pause from '@assets/images/player/pause.svg'
import play from '@assets/images/player/play.svg'

import { playStatusTypes } from '../MoviePlayer'

import styles from './PlayButton.module.scss'

export interface PlayButtonProps {
  display: 'preview' | 'playing'
  playStatus: playStatusTypes
  setPlayStatus: Dispatch<SetStateAction<playStatusTypes>>
}

export const PlayButton: FC<PlayButtonProps> = ({
  display,
  playStatus,
  setPlayStatus,
}) => {
  const playButtonClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if (playStatus === 'pause' || playStatus === 'stop') {
      setPlayStatus('play')
      return
    }

    setPlayStatus('pause')
  }

  const setImageByStatus = (playStatus: playStatusTypes) => {
    if (playStatus === 'pause') return play
    if (playStatus === 'stop') return play
    return pause
  }

  const setAltByStatus = (playStatus: playStatusTypes) => {
    if (playStatus === 'pause') return 'play'
    if (playStatus === 'stop') return 'play'
    return 'pause'
  }

  return (
    <button
      className={cn(styles.playButton, styles[display])}
      onClick={playButtonClickHandler}
    >
      <Image
        className={styles.playImage}
        src={setImageByStatus(playStatus)}
        alt={setAltByStatus(playStatus)}
      />
    </button>
  )
}
