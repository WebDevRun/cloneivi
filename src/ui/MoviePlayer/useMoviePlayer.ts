import { MouseEventHandler, useEffect, useRef, useState } from 'react'

export type playStatusTypes = 'play' | 'pause' | 'stop'
export type isFullscreenTypes = boolean | undefined

export const useMoviePlayer = () => {
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

  return {
    isHover,
    isFullscreen,
    isFirstPlay,
    volume,
    hoverVolume,
    videoRef,
    videoLayoutRef,
    hoverRangeValueRef,
    playStatus,
    setPlayStatus,
    setIsFullscreen,
    setVolume,
    setHoverVolume,
    playClickHandler,
    mouseEnterHandler,
    mouseLeaveHandler,
  }
}
