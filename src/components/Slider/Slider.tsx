import cn from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'

import { ArrowSvg } from '@assets/svg/ArrowSvg'

import styles from './Slider.module.scss'

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
}) => {
  const TRANSITION = 600
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

  useEffect(() => {
    window.addEventListener('resize', setItemSettings)
    setItemSettings()
    return () => {
      window.removeEventListener('resize', setItemSettings)
    }
  }, [])

  useEffect(() => {
    setTransitionDuration(0)

    const clientWidth = container.current?.clientWidth
    const gap = slidesCount > 1 ? (clientWidth - slidesCount * itemWidth) / (slidesCount - 1) : clientWidth - slidesCount * itemWidth
    let scroll = scrollStep

    setItemsGap(gap)

    if ((!scrollStep || scrollStep > slidesCount) && slidesCount) {
      scroll = slidesCount > 1 ? slidesCount - 1 : 1
      setScrollStep(scroll)
    }

    setTimeout(() => {
      setTransitionDuration(TRANSITION)
    }, TRANSITION)
  }, [slidesCount, itemWidth, scrollStep])

  useEffect(() => {
    if (infinite) {
      if (type === 'list') {
        const tailCloneCount = scrollStep - items.length % scrollStep + slidesCount
        setCloneCount({head: scrollStep, tail: tailCloneCount})
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
    const itemsLeft = Math.round(sliderItems.length - ((Math.abs(position) + slidesCount * (itemWidth + itemsGap)) / (itemWidth + itemsGap)))
    const itemsRight = Math.round(Math.abs(position) / (itemWidth + itemsGap))

    // console.log(itemsRight, 'ir')
    // console.log(itemsLeft, 'il')
  }, [position])

  useEffect(() => {
    let startPos = startPosition + cloneCount.head

    if (startPosition < 0) {
      startPos = cloneCount.head
    }

    if (startPosition > items.length - slidesCount) {
      startPos = items.length - slidesCount - cloneCount.head
    }
    setPosition(-startPos * (itemWidth + itemsGap) || 0)
  }, [cloneCount, itemsGap, itemWidth, items, slidesCount, startPosition])


  const setItemSettings = () => {
    setTransitionDuration(0)
    const item = track.current?.firstElementChild?.firstElementChild
    const itemClientWidth = (item as HTMLElement)?.offsetWidth
    let slideCount = slidesCount

    if (type === 'list' && !slideCount) {
      slideCount = Math.floor((container.current?.clientWidth + gap) / (itemClientWidth + gap))
    }

    if (type === 'oneItem') {

    }

    setSlidesCount(slideCount)
    setItemWidth(itemClientWidth)

    setTimeout(() => {
      setTransitionDuration(TRANSITION)
    }, TRANSITION)
  }

  const nextClickHandler = () => {
    const itemsLeft = sliderItems.length - ((Math.abs(position) + slidesCount * (itemWidth + itemsGap)) / (itemWidth + itemsGap))
    const pos = itemsLeft >= scrollStep ? scrollStep * (itemWidth + itemsGap) : itemsLeft * (itemWidth + itemsGap)

    setPosition(prevState => prevState - pos)
  }

  const prevClickHandler = () => {
    const itemsLeft = Math.abs(position) / (itemWidth + itemsGap)
    const pos = itemsLeft >= scrollStep ? scrollStep * (itemWidth + itemsGap) : itemsLeft * (itemWidth + itemsGap)

    setPosition(prevState => prevState + pos)
  }

  return (
    <div className={styles.slider}>
      {
        position !== 0 &&
        <button className={cn(styles.button, styles[`${arrowSize}ButtonLeft`])} onClick={prevClickHandler}>
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
        position > -(sliderItems.length - slidesCount) * (itemWidth + itemsGap) &&
        <button className={cn(styles.button, styles[`${arrowSize}ButtonRight`])}
                onClick={nextClickHandler}>
          <ArrowSvg color={'#BCBCBF'}
                    size={arrowSize}
                    direction='right'
          />
        </button>
      }
    </div>
  )
}
