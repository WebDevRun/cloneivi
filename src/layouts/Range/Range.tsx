import cn from 'classnames'
import { FC, ReactNode } from 'react'

import styles from './Range.module.scss'
import { useRange } from './useRange'

export interface RangeProps {
  coefficient: number
  hoverСoefficient: number
  setСoefficient: (number: number) => void
  setHoverСoefficient: (number: number) => void
  children?: ReactNode
  selectedRangeColor?: 'white' | 'red'
  borderRadius?: 'none' | 'r2' | 'r8'
  hasThumb?: boolean
}

export const Range: FC<RangeProps> = ({
  coefficient,
  setСoefficient,
  hoverСoefficient,
  setHoverСoefficient,
  children,
  selectedRangeColor = 'white',
  borderRadius = 'none',
  hasThumb = false,
}) => {
  const {
    selectedRange,
    hoverRangeRef,
    selectedRangeRef,
    thumbRef,
    mouseDownHandler,
    mouseUpHandler,
    rangeClickHandler,
    rangeMouseMoveHandler,
    rangeMouseOutHandler,
  } = useRange(coefficient, setСoefficient, setHoverСoefficient)

  return (
    <div
      className={cn(styles.range, styles[borderRadius])}
      onMouseMove={rangeMouseMoveHandler}
      onMouseOut={rangeMouseOutHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onClick={rangeClickHandler}
    >
      <div className={cn(styles.rangeTrack, styles[borderRadius])}></div>
      <div
        ref={selectedRangeRef}
        className={cn(
          styles.selectedRange,
          styles[selectedRangeColor],
          styles[borderRadius]
        )}
        style={{ width: `${selectedRange * 100}%` }}
      ></div>
      <div
        ref={hoverRangeRef}
        className={cn(styles.hoverRange, styles[borderRadius])}
        style={{ width: `${hoverСoefficient * 100}%` }}
      ></div>
      {hasThumb && (
        <div
          ref={thumbRef}
          style={{ left: `${selectedRange * 100}%` }}
          className={cn(styles.thumb, styles[selectedRangeColor])}
        ></div>
      )}
      {children}
    </div>
  )
}
