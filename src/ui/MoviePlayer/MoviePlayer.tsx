import cn from 'classnames'
import { FC, ReactEventHandler } from 'react'

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
    isFullscreen,
    isLoadedMetadata,
    volume,
    playStatus,
    hoverVolume,
    currentTime,
    duration,
    hoverCurrentTime,
    videoRef,
    videoLayoutRef,
    hoverRangeValueRef,
    currentTimeSetter,
    setHoverCurrentTime,
    setPlayStatus,
    setHoverVolume,
    setVolume,
    setIsFullscreen,
    mouseEnterHandler,
    mouseLeaveHandler,
    playClickHandler,
    loadedMetadataHandler,
    endedHandler,
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
        onLoadedMetadata={loadedMetadataHandler}
        onEnded={endedHandler}
      >
        <source src={videoSrc} />
      </video>

      {!isLoadedMetadata && (
        <PlayButton
          display="preview"
          playStatus={playStatus}
          setPlayStatus={setPlayStatus}
        />
      )}

      {!isLoadedMetadata && (
        <FullscreenButton
          display="preview"
          isFullscreen={isFullscreen}
          setIsFullscreen={setIsFullscreen}
        />
      )}

      {isLoadedMetadata && (
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

      {isLoadedMetadata && (
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
            <div className={styles.timeRange}>
              <Range
                coefficient={Math.round((currentTime / duration) * 100) / 100}
                setСoefficient={currentTimeSetter}
                hoverСoefficient={hoverCurrentTime}
                setHoverСoefficient={setHoverCurrentTime}
                selectedRangeColor="red"
                borderRadius="r8"
                hasThumb={true}
              >
                {hoverCurrentTime > 0 && (
                  <div
                    style={{ left: `${hoverCurrentTime * 100}%` }}
                    className={styles.timeOnRange}
                  >
                    {formatTime(duration * hoverCurrentTime, {
                      format: 'hh:mm',
                    })}
                  </div>
                )}
              </Range>
            </div>
            <div className={styles.duration}>{formatTime(duration)}</div>

            <div className={styles.playButton}>
              <PlayButton
                display="playing"
                playStatus={playStatus}
                setPlayStatus={setPlayStatus}
              />
            </div>

            <div className={styles.volume}>
              <VolumeButton volume={volume} setVolume={setVolume} />
              <Range
                coefficient={volume}
                setСoefficient={setVolume}
                hoverСoefficient={hoverVolume}
                setHoverСoefficient={setHoverVolume}
                borderRadius="r2"
              >
                {hoverVolume > 0 && (
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
