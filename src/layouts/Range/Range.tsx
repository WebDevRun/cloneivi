import { FC, ReactNode } from 'react'

import styles from './Range.module.scss'
import { useRange } from './useRange'

export interface RangeProps {
  value: number
  hoverValue: number
  setValue: (number: number) => void
  setHoverValue: (number: number) => void
  children?: ReactNode
}

export const Range: FC<RangeProps> = ({
  value,
  setValue,
  hoverValue,
  setHoverValue,
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
  } = useRange(value, setValue, setHoverValue)

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
        style={{ width: `${hoverValue * 100}%` }}
      ></div>
      {children}
    </div>
  )
}
