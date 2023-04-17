import { FC, ReactNode, useEffect, useRef, useState } from 'react'

import styles from './Slider.module.scss'

export interface SliderProps {
  component: ReactNode
  items: ISliderItem[]
  onItemClick: () => void
  slidesToShow?: number
  slidesToScroll?: number
  startPosition?: number
  gap?: number
}

export const Slider: FC<SliderProps> = ({
                                          items,
                                          component,
                                          onItemClick, slidesToShow,
                                          startPosition,
                                          slidesToScroll,
                                          gap = 24
                                        }) => {
  const container = useRef<HTMLDivElement | null>(null)
  const [itemWidth, setItemWidth] = useState(0)

  useEffect(() => {
    // setItemWidth(container.current?.clientWidth / sl)
    // console.log()
  }, [])

  return (
    <div className={styles.slider}>
      <div>
        <div className={styles.container} ref={container}>
          <div className={styles.track} style={{gap: gap}}>
            {
              items.map(item => (
                <div key={item.id} className={styles.item} onClick={onItemClick}>
                  {component}
                </div>
              ))
            }
          </div>
        </div>
        <div className='slider-buttons'>
          <button className='btn-prev'>prev</button>
          <button className='btn-next'>next</button>
        </div>
      </div>
    </div>
  )
}
