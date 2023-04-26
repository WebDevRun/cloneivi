import cn from 'classnames'
import Image from 'next/image'
import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'

import fullscreenToClose from '@assets/images/player/fullscreen-to-close.svg'
import fullscreenToOpen from '@assets/images/player/fullscreen-to-open.svg'

import { isFullscreenTypes } from '../MoviePlayer'

import styles from './FullscreenButton.module.scss'

interface FullscreenButtonProps {
  display: 'preview' | 'playing'
  isFullscreen: isFullscreenTypes
  setIsFullscreen: Dispatch<SetStateAction<isFullscreenTypes>>
}

export const FullscreenButton: FC<FullscreenButtonProps> = ({
  display,
  isFullscreen,
  setIsFullscreen,
}) => {
  const fullscreenCheckboxChangeHandler: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setIsFullscreen((prev) => !prev)
  }

  return (
    <button
      className={cn(styles.fullscreenButton, styles[display])}
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
