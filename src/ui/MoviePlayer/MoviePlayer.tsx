import cn from 'classnames'
import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react'

import { Range } from '@layouts/Range'

import { FullscreenButton } from './FullscreenButton'
import styles from './MoviePlayer.module.scss'
import { PlayButton } from './PlayButton'
import { VolumeButton } from './VolumeButton'

export interface MoviePlayerProps {
  name: string
  text?: string
  videoSrc: string
  posterSrc?: string
}

export type playStatusTypes = 'play' | 'pause' | 'stop'
export type isFullscreenTypes = boolean | undefined

export const MoviePlayer: FC<MoviePlayerProps> = ({
  name,
  text,
  videoSrc,
  posterSrc,
}) => {
  const [isHover, setIsHover] = useState(false)
  const [isFirstPlay, setIsFirstPlay] = useState(true)
  const [playStatus, setPlayStatus] = useState<playStatusTypes>('stop')
  const [isFullscreen, setIsFullscreen] = useState<isFullscreenTypes>(undefined)
  const [volume, setVolume] = useState(0.4)
  const [hoverVolume, setHoverVolume] = useState(0)

  const videoLayoutRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timer = useRef<NodeJS.Timeout | undefined>(undefined)
  const hoverRangeValueRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (playStatus === 'play') {
      videoRef.current?.play()
      setIsFirstPlay(false)
    }

    if (playStatus === 'pause') {
      videoRef.current?.pause()
    }
  }, [playStatus])

  useEffect(() => {
    const setFullscreen = async () => {
      await videoLayoutRef.current?.requestFullscreen()
    }
    const exitFullscreen = async () => {
      await document.exitFullscreen()
    }

    if (isFullscreen === true) setFullscreen()
    if (isFullscreen === false) exitFullscreen()
  }, [isFullscreen])

  useEffect(() => {
    if (videoRef.current) videoRef.current.volume = volume
  }, [volume])

  const playClickHandler: MouseEventHandler<
    HTMLVideoElement | HTMLDivElement
  > = () => {
    if (isFirstPlay) return

    if (playStatus === 'pause') {
      setPlayStatus('play')
      return
    }

    setPlayStatus('pause')
  }

  const mouseEnterHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    setIsHover(true)
    clearTimeout(timer.current)
  }

  const mouseLeaveHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    if (playStatus === 'play') {
      setIsHover(false)
      return
    }

    timer.current = setTimeout(() => {
      setIsHover(false)
    }, 20000)
  }

  return (
    <div
      ref={videoLayoutRef}
      className={styles.playerContainer}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
    >
      <video
        ref={videoRef}
        className={styles.player}
        preload="none"
        poster={posterSrc}
        onClick={playClickHandler}
      >
        <source src={videoSrc} />
      </video>

      {isFirstPlay && (
        <PlayButton
          type="big"
          playStatus={playStatus}
          setPlayStatus={setPlayStatus}
        />
      )}

      {!isFirstPlay && (
        <div
          className={cn(styles.infoContainer, {
            [styles.infoContainer_hover]: isHover,
          })}
        >
          <div
            className={cn(styles.infoInnerContainer, {
              [styles.infoInnerContainer_hover]: isHover,
            })}
          >
            <p className={styles.name}>{name}</p>
            {text && <p className={styles.text}>{text}</p>}
          </div>
        </div>
      )}

      {!isFirstPlay && (
        <div
          className={cn(styles.controlsContainer, {
            [styles.controlsContainer_hover]: isHover,
          })}
        >
          <div
            className={cn(styles.controlsInnerContainer, {
              [styles.controlsInnerContainer_hover]: isHover,
            })}
          >
            <PlayButton
              type="small"
              playStatus={playStatus}
              setPlayStatus={setPlayStatus}
            />
            <div className={styles.volume}>
              <VolumeButton volume={volume} setVolume={setVolume} />
              <Range
                value={volume}
                setValue={setVolume}
                hoverValue={hoverVolume}
                setHoverValue={setHoverVolume}
              >
                {Math.round(hoverVolume * 100) !== 0 && (
                  <div
                    ref={hoverRangeValueRef}
                    className={styles.hoverRangeVolume}
                    style={{ left: `${hoverVolume * 100}%` }}
                  >
                    {Math.round(hoverVolume * 100)}
                  </div>
                )}
              </Range>
            </div>
          </div>
        </div>
      )}

      <FullscreenButton
        isFullscreen={isFullscreen}
        setIsFullscreen={setIsFullscreen}
      />
    </div>
  )
}
