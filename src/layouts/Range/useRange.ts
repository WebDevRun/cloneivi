import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'

export const useRange = (
  value: number,
  setValue: Dispatch<SetStateAction<number>>,
  setHoverValue: Dispatch<SetStateAction<number>>
) => {
  const [selectedRange, setSelectedRange] = useState(value)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const hoverRangeRef = useRef<HTMLDivElement>(null)
  const selectedRangeRef = useRef<HTMLDivElement>(null)

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

  return {
    selectedRange,
    hoverRangeRef,
    selectedRangeRef,
    rangeMouseMoveHandler,
    rangeMouseOutHandler,
    mouseDownHandler,
    mouseUpHandler,
    rangeClickHandler,
  }
}
