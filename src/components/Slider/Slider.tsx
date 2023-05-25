import cn from 'classnames'
import {
  FC,
  useEffect,
  useRef,
  useState
} from 'react'

import { ArrowSvg } from '@assets/svg/ArrowSvg'

import styles from './Slider.module.scss'

export interface SliderProps {
  Component: FC<any>
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
  isCrop: boolean
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
  slidesToShow = 0,
  startPosition = 0,
  slidesToScroll = 0,
  arrowSize,
  gap = 24,
  infinite = false,
  type,
  autoScroll = false,
  isCrop = true,
}) => {
  const TRANSITION = 600
  const INTERVAL = 10000
  const SMALL_BUTTON_GAP = 15
  const BIG_BUTTON_GAP = 30
  const ONE_ITEM_BUTTON_GAP = 60
  const ONE_ITEM_MIN_CLONE_COUNT = 3

  const container = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)

  const [itemWidth, setItemWidth] = useState<number>(0)
  const [slidesCount, setSlidesCount] = useState<number>(slidesToShow)
  const [itemsGap, setItemsGap] = useState<number>(gap)
  const [position, setPosition] = useState<number>(startPosition)
  const [scrollStep, setScrollStep] = useState<number>(slidesToScroll)
  const [transitionDuration, setTransitionDuration] = useState<number>(0)
  const [sliderItems, setSliderItems] = useState<typeof items>(items)
  const [cloneCount, setCloneCount] = useState<ICloneCount>({ head: 0, tail: 0 })
  const [buttonPosition, setButtonPosition] = useState<number>(0)
  const [margin, setMargin] = useState<number>(0)
  const [activeItem, setActiveItem] = useState<number>(0)
  const [isLeftArrowAnimate, setIsLeftArrowAnimate] = useState<boolean>(false)
  const [isRightArrowAnimate, setIsRightArrowAnimate] = useState<boolean>(false)

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
      const clientWidth = container.current?.clientWidth || 0
      const gap = slidesCount > 1 ? (clientWidth - slidesCount * itemWidth) / (slidesCount - 1) : clientWidth - slidesCount * itemWidth
      let scroll = scrollStep

      if (isCrop) {
        setItemsGap(gap)
      }

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
  }, [slidesCount, itemWidth, scrollStep, type, isCrop, container.current?.clientWidth])

  useEffect(() => {
    if (infinite) {
      if (type === 'list') {
        const tailCloneCount = scrollStep - items.length % scrollStep + slidesCount
        setCloneCount({ head: tailCloneCount, tail: tailCloneCount })
        return
      }

      if (type === 'oneItem') {
        setCloneCount({ head: ONE_ITEM_MIN_CLONE_COUNT, tail: ONE_ITEM_MIN_CLONE_COUNT })
        return
      }
    }

    setCloneCount({ head: 0, tail: 0 })
  }, [infinite, items, scrollStep, type, slidesCount])

  useEffect(() => {
    const rightItems = items.slice(0, cloneCount.tail)
    const leftItems = items.slice(items.length - cloneCount.head, items.length)
    setSliderItems([...leftItems, ...items, ...rightItems])
  }, [cloneCount, items])

  useEffect(() => {
    const currentPosition = Math.round(Math.abs(position - margin) / (itemWidth + itemsGap))
    setActiveItem(currentPosition)

    if (!currentPosition) return

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

    if (autoScroll) {
      const interval = setInterval(nextClickHandler, INTERVAL)
      return () => clearInterval(interval)
    }
  }, [autoScroll, cloneCount, infinite, itemWidth, itemsGap, margin, position, sliderItems.length])

  useEffect(() => {
    let startPos = startPosition + cloneCount.head
    if (startPosition < 0) {
      startPos = cloneCount.head
    }

    if (startPosition > items.length - slidesCount) {
      startPos = items.length - slidesCount - cloneCount.head
    }
    setPosition(-startPos * (itemWidth + itemsGap) + margin)
  }, [cloneCount, itemsGap, itemWidth, items, slidesCount, startPosition, margin])

  useEffect(() => {
    if (type === 'list') {
      if (arrowSize === 'big') {
        setButtonPosition(-BIG_BUTTON_GAP)
      }

      if (arrowSize === 'small') {
        setButtonPosition(-SMALL_BUTTON_GAP)
      }
    }

    if (type === 'oneItem') {
      setButtonPosition(margin - ONE_ITEM_BUTTON_GAP)
    }
  }, [arrowSize, itemWidth, margin, type])

  useEffect(() => {
    const clientWidth = container.current?.clientWidth || 0

    type === 'oneItem' &&
    setMargin((clientWidth - itemWidth) / 2)
  }, [itemWidth, container.current?.clientWidth, type])

  const setItemSettings = () => {
    setTransitionDuration(0)
    const item = track.current?.firstElementChild?.firstElementChild
    const itemClientWidth = (item as HTMLElement)?.offsetWidth
    let slideCount = slidesCount

    if (type === 'list' && !slideCount) {
      const clientWidth = container.current?.clientWidth || 0
      slideCount = Math.floor((clientWidth + gap) / (itemClientWidth + gap))
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

    setIsRightArrowAnimate(true)

    setTimeout(() => {
      setIsRightArrowAnimate(false)
    }, 50)
  }

  const prevClickHandler = () => {
    const itemsLeft = Math.abs(position - margin) / (itemWidth + itemsGap)
    const pos = itemsLeft >= scrollStep ? scrollStep * (itemWidth + itemsGap) : itemsLeft * (itemWidth + itemsGap)

    setPosition(prevState => prevState + pos)

    setIsLeftArrowAnimate(true)

    setTimeout(() => {
      setIsLeftArrowAnimate(false)
    }, 50)
  }

  return (
    <div className={styles.slider}>
      {
        (position - margin !== 0) &&
        <button
          className={cn(
            styles.button,
            isLeftArrowAnimate && styles.arrowAnimate,
          )}
          onClick={prevClickHandler}
          style={{ left: `${buttonPosition}px` }}
        >
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
              <div key={index}
                   className={cn(styles.item, type === 'oneItem' && index !== activeItem && styles.unActive)}
                   style={{ transition: `opacity ${transitionDuration}ms` }}
                   onClick={() => onItemClick(item.id)}>
                <Component {...item} {...componentSetting} />
              </div>
            ))
          }
        </div>
      </div>
      {!isCrop && <div className={styles.overlay} />}
      {
        (position - margin > -(sliderItems.length - slidesCount) * (itemWidth + itemsGap)) &&
        <button
          className={cn(
            styles.button,
            isRightArrowAnimate && styles.arrowAnimate,
          )}
          onClick={nextClickHandler}
          style={{ right: `${buttonPosition}px` }}
        >
          <ArrowSvg color='#BCBCBF'
                    size={arrowSize}
                    direction='right'
          />
        </button>
      }
    </div>
  )
}
