import cn from 'classnames'
import { FC } from 'react'

import { formatTime } from '@/utils/functions/formatTime'
import { Range } from '@layouts/Range'

import { Button } from './Button'
import { FullscreenButton } from './FullscreenButton'
import styles from './MoviePlayer.module.scss'
import { PlayButton } from './PlayButton'
import { useMoviePlayer } from './useMoviePlayer'
import { VolumeButton } from './VolumeButton'

export type playStatusTypes = 'play' | 'pause' | 'stop'
export type isFullscreenTypes = boolean | undefined
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
    currentTime,
    duration,
    hoverCurrentTime,
    videoRef,
    videoLayoutRef,
    hoverRangeValueRef,
    setCurrentTime,
    setHoverCurrentTime,
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
          display="preview"
          playStatus={playStatus}
          setPlayStatus={setPlayStatus}
        />
      )}

      {isFirstPlay && (
        <FullscreenButton
          display="preview"
          isFullscreen={isFullscreen}
          setIsFullscreen={setIsFullscreen}
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
            <div className={styles.currentTime}>{formatTime(currentTime)}</div>
            <Range
              value={currentTime / duration}
              setValue={setCurrentTime}
              hoverValue={hoverCurrentTime}
              setHoverValue={setHoverCurrentTime}
            >
              <div className={styles.currentTime}>
                {formatTime(currentTime)}
              </div>
            </Range>
            <div className={styles.duration}>{formatTime(duration)}</div>

            <PlayButton
              display="playing"
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

            <Button image="setting" />
            <Button image="subtitles" />

            <FullscreenButton
              display="playing"
              isFullscreen={isFullscreen}
              setIsFullscreen={setIsFullscreen}
            />
          </div>
        </div>
      )}
    </div>
  )
}
