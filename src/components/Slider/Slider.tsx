import cn from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'

import { ArrowSvg } from '@ui/svg/ArrowSvg'

import styles from './Slider.module.scss'

export interface SliderProps {
  Component: FC
  items: ISliderItem[]
  onItemClick: () => void
  slidesToShow?: number
  slidesToScroll?: number
  startPosition?: number
  gap?: number,
  arrowSize?: 'small' | 'big'
}

export const Slider: FC<SliderProps> = ({
                                          items,
                                          Component,
                                          onItemClick,
                                          slidesToShow = 0,
                                          startPosition,
                                          slidesToScroll,
                                          arrowSize = 'big',
                                          gap = 24
                                        }) => {
  const container = useRef<HTMLDivElement | null>(null)
  const track = useRef<HTMLDivElement | null>(null)
  const [itemWidth, setItemWidth] = useState(0)
  const [slidesCount, setSlidesCount] = useState(slidesToShow)
  const [clientWidth, setClientWidth] = useState(0)
  const [itemsGap, setItemsGap] = useState(gap)
  const [position, setPosition] = useState(startPosition || 1)

  useEffect(() => {
    const itemClientWidth = track.current?.children[0].children[0].clientWidth

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
    setSlidesCount(showSlides)
    setItemWidth(itemWidth)
    setClientWidth(clientWidth || 0)
    setItemsGap(gap)
  }

  const nextClickHandler = () => {
    const itemsLeft = items.length - (Math.abs(position) + slidesCount * itemWidth) / itemWidth
    const pos = itemsLeft >= slidesCount ? slidesCount * itemWidth : itemsLeft * itemWidth
    setPosition(prevState => prevState - pos)
  }

  const prevClickHandler = () => {
    const itemsLeft = Math.abs(position) / itemWidth
    const pos = itemsLeft >= slidesCount ? slidesCount * itemWidth : itemsLeft * itemWidth
    setPosition(prevState => prevState + pos)
  }

  return (
    <div className={styles.slider}>
      <button className={cn(styles.button, styles.buttonLeft)} disabled={position === 0} onClick={prevClickHandler}>
        <ArrowSvg color={'#BCBCBF'}
                  size={arrowSize === 'big' ? 32 : arrowSize === 'small' ? 16 : 0}
                  direction={'left'}
        />
      </button>
      <div className={styles.container} ref={container}>
        <div className={styles.track} style={{ gap: itemsGap, transform: `translateX(${position}px)` }} ref={track}>
          {
            items.map(item => (
              <div key={item.id} className={styles.item} onClick={onItemClick}>
                <Component {...item} />
              </div>
            ))
          }
        </div>
      </div>
      <button className={cn(styles.button, styles.buttonRight)} disabled={position <= -(items.length - slidesToShow) * itemWidth} onClick={nextClickHandler}>
        <ArrowSvg color={'#BCBCBF'}
                  size={arrowSize === 'big' ? 32 : arrowSize === 'small' ? 16 : 0}
                  direction={'right'}
        />

      </button>
    </div>
  )
}
