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
    const hoverRangeElement = hoverRangeRef.current
    const hoverRangeValueElement = hoverRangeValueRef.current

    if (hoverRangeElement === null) return

    hoverRangeElement.style.width = `${hoverValue * 100}%`

    if (hoverRangeValueElement == null) return

    hoverRangeValueElement.style.left = `${hoverValue * 100}%`
  }, [hoverValue])

  useEffect(() => {
    const element = selectedRangeRef.current

    if (element === null) return

    element.style.width = `${selectedRange * 100}%`
  }, [selectedRange])

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
    setValue(selectedRange)
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
      <div ref={selectedRangeRef} className={styles.selectedRange}></div>
      <div ref={hoverRangeRef} className={styles.hoverRange}></div>
      {Math.round(hoverValue * 100) !== 0 && (
        <p ref={hoverRangeValueRef} className={styles.hoverRangeValue}>
          {Math.round(hoverValue * 100)}
        </p>
      )}
    </div>
  )
}
