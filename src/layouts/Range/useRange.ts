import { MouseEventHandler, useEffect, useRef, useState } from 'react'

import { RangeProps } from './Range'

export const useRange = (
  value: RangeProps['value'],
  setValue: RangeProps['setValue'],
  setHoverValue: RangeProps['setHoverValue']
) => {
  const [selectedRange, setSelectedRange] = useState(value)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const hoverRangeRef = useRef<HTMLDivElement>(null)
  const selectedRangeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSelectedRange(value)
  }, [value])

  const rangeMouseMoveHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    const offsetWidth = event.currentTarget.offsetWidth
    const offsetX = event.nativeEvent.offsetX
    const value = Math.round((offsetX / offsetWidth) * 100) / 100

    setHoverValue(value)

    if (isMouseDown) setValue(value)
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

    setValue(value)
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
