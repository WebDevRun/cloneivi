import Image from 'next/image'
import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'

import fullscreenToClose from '@assets/images/player/fullscreen-to-close.svg'
import fullscreenToOpen from '@assets/images/player/fullscreen-to-open.svg'

import { isFullscreenTypes } from '../MoviePlayer'

import styles from './FullscreenButton.module.scss'

interface FullscreenButtonProps {
  isFullscreen: isFullscreenTypes
  setIsFullscreen: Dispatch<SetStateAction<isFullscreenTypes>>
}

export const FullscreenButton: FC<FullscreenButtonProps> = ({
  isFullscreen,
  setIsFullscreen,
}) => {
  const fullscreenCheckboxChangeHandler: MouseEventHandler<
    HTMLButtonElement
  > = (event) => {
    setIsFullscreen((prev) => !prev)
  }

  return (
    <button
      className={styles.fullscreenButton}
      onClick={fullscreenCheckboxChangeHandler}
    >
      <Image
        className={styles.fullscreenImage}
        src={isFullscreen ? fullscreenToClose : fullscreenToOpen}
        alt={isFullscreen ? 'fullscreenToClose' : 'fullscreenToOpen'}
      />
    </button>
  )
}
