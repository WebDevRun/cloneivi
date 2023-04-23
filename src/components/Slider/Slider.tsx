import cn from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'

import { ArrowSvg } from '@assets/svg/ArrowSvg'

import styles from './Slider.module.scss'
import { clearInterval } from 'timers'

export interface SliderProps {
  Component: FC
  items: any[]
  arrowSize: 'small' | 'big'
  type: 'list' | 'oneItem'
  componentSetting?: object
  onItemClick: (id: number) => void
  slidesToShow?: number
  slidesToScroll?: number
  startPosition?: number
  gap?: number
  infinite?: boolean
  autoScroll?: boolean
}

export interface ICloneCount {
  head: number
  tail: number
}

export const Slider: FC<SliderProps> = ({
  items,
  Component,
  componentSetting = {},
  onItemClick,
  slidesToShow,
  startPosition = 0,
  slidesToScroll = 0,
  arrowSize,
  gap = 24,
  infinite = false,
  type,
  autoScroll = false
}) => {
  const TRANSITION = 600
  const INTERVAL = 10000
  const container = useRef<HTMLDivElement | null>(null)
  const track = useRef<HTMLDivElement | null>(null)

  const [itemWidth, setItemWidth] = useState<number>(0)
  const [slidesCount, setSlidesCount] = useState<number>(slidesToShow || 0)
  const [itemsGap, setItemsGap] = useState<number>(gap || 24)
  const [position, setPosition] = useState<number>(startPosition || 0)
  const [scrollStep, setScrollStep] = useState<number>(slidesToScroll || 0)
  const [transitionDuration, setTransitionDuration] = useState<number>(0)
  const [sliderItems, setSliderItems] = useState<typeof items>(items)
  const [cloneCount, setCloneCount] = useState<ICloneCount>({head: 0, tail: 0})
  const [buttonPosition, setButtonPosition] = useState<number>(0)
  const [margin, setMargin] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('resize', setItemSettings)
    setItemSettings()
    return () => {
      window.removeEventListener('resize', setItemSettings)
    }
  }, [])

  useEffect(() => {
    setTransitionDuration(0)

    if (type === 'list') {
      const clientWidth = container.current?.clientWidth
      const gap = slidesCount > 1 ? (clientWidth - slidesCount * itemWidth) / (slidesCount - 1) : clientWidth - slidesCount * itemWidth
      let scroll = scrollStep

      setItemsGap(gap)

      if ((!scrollStep || scrollStep > slidesCount) && slidesCount) {
        scroll = slidesCount > 1 ? slidesCount - 1 : 1
        setScrollStep(scroll)
      }
    }

    if (type === 'oneItem') {
      setItemsGap(16)
      setScrollStep(1)
    }

    setTimeout(() => {
      setTransitionDuration(TRANSITION)
    }, TRANSITION)
  }, [slidesCount, itemWidth, scrollStep])

  useEffect(() => {
    if (infinite) {
      if (type === 'list') {
        const tailCloneCount = scrollStep - items.length % scrollStep + slidesCount
        setCloneCount({head: tailCloneCount, tail: tailCloneCount})
        return
      }

      if (type === 'oneItem') {
        setCloneCount({head: 2, tail: 2})
        return
      }
    }

    setCloneCount({head: 0, tail: 0})
  }, [infinite, items, scrollStep, type, slidesCount])

  useEffect(() => {
    const rightItems = items.slice(0, cloneCount.tail)
    const leftItems = items.slice(items.length - cloneCount.head, items.length)
    setSliderItems([...leftItems, ...items, ...rightItems])
  }, [cloneCount, items])

  useEffect(() => {
    if (autoScroll) {
      const interval =window.setInterval(nextClickHandler, INTERVAL)
      return () => window.clearInterval(interval)
    }

    if (!infinite) return

    const currentPosition = Math.round(Math.abs(position - margin) / (itemWidth + itemsGap))

    if (currentPosition >= sliderItems.length - cloneCount.tail) {
      setTimeout(() => {
        setTransitionDuration(0)

        const pos = cloneCount.head + Math.abs(sliderItems.length - cloneCount.head - currentPosition)
        setPosition(-pos * (itemWidth + itemsGap) + margin)

        setTimeout(() => {
          setTransitionDuration(TRANSITION)
        }, 100)
      }, TRANSITION)
    }

    if (currentPosition < cloneCount.head) {
      setTimeout(() => {
        setTransitionDuration(0)

        const pos = sliderItems.length - cloneCount.tail - (cloneCount.tail - currentPosition)
        setPosition(-pos * (itemWidth + itemsGap) + margin)

        setTimeout(() => {
          setTransitionDuration(TRANSITION)
        }, 100)
      }, TRANSITION)
    }
  }, [position])

  useEffect(() => {
    let startPos = startPosition + cloneCount.head
    if (startPosition < 0) {
      startPos = cloneCount.head
    }

    if (startPosition > items.length - slidesCount) {
      startPos = items.length - slidesCount - cloneCount.head
    }
    setPosition(-startPos * (itemWidth + itemsGap) + margin || 0)
  }, [cloneCount, itemsGap, itemWidth, items, slidesCount, startPosition, margin])

  useEffect(() => {
    if (type === 'list') {
      if (arrowSize === 'big') {
        setButtonPosition(-30)
      }

      if (arrowSize === 'small') {
        setButtonPosition(-15)
      }
    }

    if (type === 'oneItem') {
      setButtonPosition(margin - 60)
    }
  }, [itemWidth, margin])

  useEffect(() => {
    type === 'oneItem' &&
    setMargin((container.current?.clientWidth - itemWidth) / 2)
  }, [itemWidth, container.current?.clientWidth])

  const setItemSettings = () => {
    setTransitionDuration(0)
    const item = track.current?.firstElementChild?.firstElementChild
    const itemClientWidth = (item as HTMLElement)?.offsetWidth
    let slideCount = slidesCount

    if (type === 'list' && !slideCount) {
      slideCount = Math.floor((container.current?.clientWidth + gap) / (itemClientWidth + gap))
    }

    if (type === 'oneItem') {
      slideCount = 1
    }

    setSlidesCount(slideCount)
    setItemWidth(itemClientWidth)

    setTimeout(() => {
      setTransitionDuration(TRANSITION)
    }, TRANSITION)
  }

  const nextClickHandler = () => {
    const itemsLeft = sliderItems.length - ((Math.abs(position - margin) + slidesCount * (itemWidth + itemsGap)) / (itemWidth + itemsGap))
    const pos = itemsLeft >= scrollStep ? scrollStep * (itemWidth + itemsGap) : itemsLeft * (itemWidth + itemsGap)

    setPosition(prevState => prevState - pos)
  }

  const prevClickHandler = () => {
    const itemsLeft = Math.abs(position - margin) / (itemWidth + itemsGap)
    const pos = itemsLeft >= scrollStep ? scrollStep * (itemWidth + itemsGap) : itemsLeft * (itemWidth + itemsGap)

    setPosition(prevState => prevState + pos)
  }

  return (
    <div className={styles.slider}>
      {
        (position - margin !== 0 || infinite) &&
        <button className={styles.button} onClick={prevClickHandler} style={{left: `${buttonPosition}px`}}>
          <ArrowSvg color='#BCBCBF'
                    size={arrowSize}
                    direction='left'
          />
        </button>
      }
      <div className={styles.container} ref={container}>
        <div className={styles.track}
             style={{
               gap: itemsGap,
               transform: `translateX(${position}px)`,
               transition: `${transitionDuration}ms`,
             }}
             ref={track}>
          {
            sliderItems.map((item, index) => (
              <div key={index} className={styles.item} onClick={() => onItemClick(item.id)}>
                <Component {...item} {...componentSetting} />
              </div>
            ))
          }
        </div>
      </div>
      {
        (position - margin > -(sliderItems.length - slidesCount) * (itemWidth + itemsGap) || infinite) &&
        <button className={styles.button} onClick={nextClickHandler} style={{right: `${buttonPosition}px`}}>
          <ArrowSvg color={'#BCBCBF'}
                    size={arrowSize}
                    direction='right'
          />
        </button>
      }
    </div>
  )
}
