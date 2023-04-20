import cn from 'classnames'
import { FC } from 'react'

import { Range } from '@layouts/Range'

import { FullscreenButton } from './FullscreenButton'
import styles from './MoviePlayer.module.scss'
import { PlayButton } from './PlayButton'
import { useMoviePlayer } from './useMoviePlayer'
import { VolumeButton } from './VolumeButton'

export interface MoviePlayerProps {
  name: string
  text?: string
  videoSrc: string
  posterSrc?: string
}

export const MoviePlayer: FC<MoviePlayerProps> = ({
  name,
  text,
  videoSrc,
  posterSrc,
}) => {
  const {
    isHover,
    isFirstPlay,
    isFullscreen,
    volume,
    playStatus,
    hoverVolume,
    videoRef,
    videoLayoutRef,
    hoverRangeValueRef,
    setPlayStatus,
    setHoverVolume,
    setVolume,
    setIsFullscreen,
    mouseEnterHandler,
    mouseLeaveHandler,
    playClickHandler,
  } = useMoviePlayer()

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
