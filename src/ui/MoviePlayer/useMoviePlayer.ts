import {
  MouseEventHandler,
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'

import { isFullscreenTypes, playStatusTypes } from './MoviePlayer'

export const useMoviePlayer = () => {
  const [isHover, setIsHover] = useState(false)
  const [playStatus, setPlayStatus] = useState<playStatusTypes>('stop')
  const [isFullscreen, setIsFullscreen] = useState<isFullscreenTypes>(undefined)
  const [volume, setVolume] = useState(0.4)
  const [hoverVolume, setHoverVolume] = useState(0)
  const [isLoadedMetadata, setIsLoadedMetadata] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [hoverCurrentTime, setHoverCurrentTime] = useState(0)

  const videoLayoutRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timer = useRef<NodeJS.Timeout | undefined>(undefined)
  const hoverRangeValueRef = useRef<HTMLParagraphElement>(null)
  const currentTimeTimer = useRef<NodeJS.Timer>()

  useEffect(() => {
    if (playStatus === 'play') {
      videoRef.current?.play()
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

  useEffect(() => {
    if (isLoadedMetadata === false) return

    const element = videoRef.current

    if (element === null) return

    if (element.currentTime >= element.duration) {
      clearInterval(currentTimeTimer.current)
      return
    }

    currentTimeTimer.current = setInterval(() => {
      if (element) setCurrentTime(element.currentTime)
    }, 1000)

    return () => {
      clearInterval(currentTimeTimer.current)
    }
  }, [isLoadedMetadata])

  const playClickHandler: MouseEventHandler<HTMLVideoElement> = () => {
    if (!isLoadedMetadata) return

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

  const loadedMetadataHandler: ReactEventHandler<HTMLVideoElement> = (
    event
  ) => {
    setIsLoadedMetadata(true)
  }

  const currentTimeSetter = (time: number) => {
    if (videoRef.current === null) return

    videoRef.current.currentTime = time
  }

  return {
    isHover,
    isFullscreen,
    isLoadedMetadata,
    volume,
    hoverVolume,
    videoRef,
    videoLayoutRef,
    hoverRangeValueRef,
    playStatus,
    currentTime,
    duration: videoRef.current ? videoRef.current.duration : 0,
    hoverCurrentTime,
    setCurrentTime,
    setHoverCurrentTime,
    setPlayStatus,
    setIsFullscreen,
    setVolume,
    setHoverVolume,
    currentTimeSetter,
    playClickHandler,
    mouseEnterHandler,
    mouseLeaveHandler,
    loadedMetadataHandler,
  }
}
