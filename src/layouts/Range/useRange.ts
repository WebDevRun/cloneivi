import { MouseEventHandler, useEffect, useRef, useState } from 'react'

import { RangeProps } from './Range'

export const useRange = (
  coefficient: RangeProps['coefficient'],
  setСoefficient: RangeProps['setСoefficient'],
  setHoverСoefficient: RangeProps['setHoverСoefficient'],
) => {
  const [selectedRange, setSelectedRange] = useState(coefficient)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const hoverRangeRef = useRef<HTMLDivElement>(null)
  const selectedRangeRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSelectedRange(coefficient)
  }, [coefficient])

  const rangeMouseMoveHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    const offsetWidth = event.currentTarget.offsetWidth
    const offsetX = event.nativeEvent.offsetX
    let value = Math.round((offsetX / offsetWidth) * 100) / 100

    value = value < 0 ? 0 : value
    setHoverСoefficient(value)

    if (isMouseDown) setСoefficient(value)
  }

  const rangeMouseOutHandler: MouseEventHandler<HTMLDivElement> = () => {
    setHoverСoefficient(0)
  }

  const mouseDownHandler: MouseEventHandler<HTMLDivElement> = () => {
    setIsMouseDown(true)
  }

  const mouseUpHandler: MouseEventHandler<HTMLDivElement> = () => {
    setIsMouseDown(false)
  }

  const rangeClickHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    const offsetWidth = event.currentTarget.offsetWidth
    const offsetX = event.nativeEvent.offsetX
    let value = Math.round((offsetX / offsetWidth) * 100) / 100

    value = value < 0 ? 0 : value
    setСoefficient(value)
  }

  return {
    selectedRange,
    hoverRangeRef,
    selectedRangeRef,
    thumbRef,
    rangeMouseMoveHandler,
    rangeMouseOutHandler,
    mouseDownHandler,
    mouseUpHandler,
    rangeClickHandler,
  }
}
