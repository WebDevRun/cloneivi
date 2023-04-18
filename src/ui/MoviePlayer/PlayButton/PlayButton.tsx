import cn from 'classnames'
import Image from 'next/image'
import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'

import pause from '@assets/images/player/pause.svg'
import play from '@assets/images/player/play.svg'

import { playStatusTypes } from '../MoviePlayer'

import styles from './PlayButton.module.scss'

export interface PlayButtonProps {
  type: 'big' | 'small'
  playStatus: playStatusTypes
  setPlayStatus: Dispatch<SetStateAction<playStatusTypes>>
}

export const PlayButton: FC<PlayButtonProps> = ({
  type,
  playStatus,
  setPlayStatus,
}) => {
  const playButtonClickHandler: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    if (playStatus === 'pause') {
      setPlayStatus('play')
      return
    }
    if (playStatus === 'stop') {
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
      className={cn(styles.playButton, styles[type])}
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
