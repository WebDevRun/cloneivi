import cn from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'

import { ArrowSvg } from '@assets/svg/ArrowSvg'

import styles from './Slider.module.scss'

export interface SliderProps {
  Component: FC
  componentSetting?: object
  items: any[]
  onItemClick: (id: number) => void
  slidesToShow?: number
  slidesToScroll?: number
  startPosition?: number
  gap?: number,
  arrowSize?: 'small' | 'big'
}

export const Slider: FC<SliderProps> = ({
  items,
  Component,
  componentSetting = {},
  onItemClick,
  slidesToShow,
  startPosition = 0,
  slidesToScroll,
  arrowSize = 'big',
  gap = 24,
}) => {
  const container = useRef<HTMLDivElement | null>(null)
  const track = useRef<HTMLDivElement | null>(null)
  const [itemWidth, setItemWidth] = useState<number>(0)
  const [slidesCount, setSlidesCount] = useState<number>(slidesToShow || 0)
  const [itemsGap, setItemsGap] = useState<number>(gap || 24)
  const [position, setPosition] = useState<number>(startPosition || 0)
  const [scrollStep, setScrollStep] = useState<number>(slidesToScroll || 0)

  useEffect(() => {
    const item = track.current?.firstElementChild?.firstElementChild
    const itemClientWidth = (item as HTMLElement)?.offsetWidth

    if (slidesCount) {
      setSettings(slidesCount, itemClientWidth)
    } else {
      const slideCount = Math.floor((container.current?.clientWidth + gap) / (itemClientWidth + gap))
      if (itemClientWidth) {
        setSettings(slideCount, itemClientWidth)
      }
    }
  }, [])

  const setSettings = (showSlides, itemWidth) => {
    const clientWidth = container.current?.clientWidth
    const gap = (clientWidth - showSlides * itemWidth) / (showSlides - 1)
    const startPost = getStartPosition(showSlides)
    setSlidesCount(showSlides)
    setItemWidth(itemWidth)
    setPosition(-startPost * (itemWidth + gap) || 0)

    setItemsGap(gap)
    if (!scrollStep || scrollStep > showSlides) {
      setScrollStep(showSlides > 1 ? showSlides - 1 : 1)
    }
  }

  const getStartPosition = (showSlides) => {
    let startPos = startPosition
    if (startPosition < 0) {
      startPos = 0
    }
    if (startPosition > items.length - showSlides) {
      startPos = items.length - showSlides
    }
    return startPos
  }

  const nextClickHandler = () => {
    const itemsLeft = items.length - ((Math.abs(position) + slidesCount * (itemWidth + itemsGap)) / (itemWidth + itemsGap))
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
                    size={arrowSize || 'big'}
                    direction='left'
          />
        </button>
      }
      <div className={styles.container} ref={container}>
        <div className={styles.track} style={{gap: itemsGap, transform: `translateX(${position}px)`}}
             ref={track}>
          {
            items.map(item => (
              <div key={item.id} className={styles.item} onClick={() => onItemClick(item.id)}>
                <Component {...item} {...componentSetting} />
              </div>
            ))
          }
        </div>
      </div>
      {
        position > -(items.length - slidesCount) * (itemWidth + itemsGap) &&
        <button className={cn(styles.button, styles[`${arrowSize}ButtonRight`])}
                onClick={nextClickHandler}>
          <ArrowSvg color={'#BCBCBF'}
                    size={arrowSize || 'big'}
                    direction='right'
          />
        </button>
      }
    </div>
  )
}
