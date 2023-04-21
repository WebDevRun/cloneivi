import { FC, ReactNode } from 'react'

import styles from './Range.module.scss'
import { useRange } from './useRange'

export interface RangeProps {
  coefficient: number
  hoverСoefficient: number
  setСoefficient: (number: number) => void
  setHoverСoefficient: (number: number) => void
  children?: ReactNode
}

export const Range: FC<RangeProps> = ({
  coefficient,
  setСoefficient,
  hoverСoefficient,
  setHoverСoefficient,
  children,
}) => {
  const {
    selectedRange,
    hoverRangeRef,
    selectedRangeRef,
    mouseDownHandler,
    mouseUpHandler,
    rangeClickHandler,
    rangeMouseMoveHandler,
    rangeMouseOutHandler,
  } = useRange(coefficient, setСoefficient, setHoverСoefficient)

  return (
    <div
      className={styles.range}
      onMouseMove={rangeMouseMoveHandler}
      onMouseOut={rangeMouseOutHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onClick={rangeClickHandler}
    >
      <div className={styles.rangeTrack}></div>
      <div
        ref={selectedRangeRef}
        className={styles.selectedRange}
        style={{ width: `${selectedRange * 100}%` }}
      ></div>
      <div
        ref={hoverRangeRef}
        className={styles.hoverRange}
        style={{ width: `${hoverСoefficient * 100}%` }}
      ></div>
      {children}
    </div>
  )
}
