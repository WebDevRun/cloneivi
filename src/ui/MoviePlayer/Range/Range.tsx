import {
  Dispatch,
  FC,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'

import styles from './Range.module.scss'

export interface RangeProps {
  value: number
  setValue: Dispatch<SetStateAction<number>>
}

export const Range: FC<RangeProps> = ({ value, setValue }) => {
  const [hoverValue, setHoverValue] = useState(0)
  const [selectedRange, setSelectedRange] = useState(value)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const hoverRangeRef = useRef<HTMLDivElement>(null)
  const selectedRangeRef = useRef<HTMLDivElement>(null)
  const hoverRangeValueRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    setSelectedRange(value)
  }, [value])

  useEffect(() => {
    setValue(selectedRange)
  }, [selectedRange, setValue])

  const rangeMouseMoveHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    const offsetWidth = event.currentTarget.offsetWidth
    const offsetX = event.nativeEvent.offsetX
    const value = Math.round((offsetX / offsetWidth) * 100) / 100

    setHoverValue(value)

    if (isMouseDown) setSelectedRange(value)
  }

  const rangeMouseOutHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    setHoverValue(0)
  }

  const mouseDownHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    setIsMouseDown(true)
  }

  const mouseUpHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    setIsMouseDown(false)
  }

  const rangeClickHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    const offsetWidth = event.currentTarget.offsetWidth
    const offsetX = event.nativeEvent.offsetX
    const value = Math.round((offsetX / offsetWidth) * 100) / 100

    setSelectedRange(value)
  }

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
      {Math.round(hoverValue * 100) !== 0 && (
        <div
          ref={hoverRangeValueRef}
          className={styles.hoverRangeValue}
          style={{ left: `${hoverValue * 100}%` }}
        >
          {Math.round(hoverValue * 100)}
        </div>
      )}
    </div>
  )
}
