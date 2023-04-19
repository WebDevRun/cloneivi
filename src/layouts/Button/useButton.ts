import { CSSProperties, MouseEventHandler, useState } from 'react'

import { ButtonProps } from './Button'

export const useButton = () => {
  const [isHover, setIsHover] = useState(false)

  const calcPadding = (
    verticalPadding: ButtonProps['verticalPadding'],
    horizontalPadding: ButtonProps['horizontalPadding']
  ): CSSProperties => {
    return {
      paddingLeft: horizontalPadding,
      paddingRight: horizontalPadding,
      paddingTop: verticalPadding,
      paddingBottom: verticalPadding,
    }
  }

  const calcBackround = (
    background: ButtonProps['background'],
    hoverBackground: ButtonProps['hoverBackground']
  ): CSSProperties => {
    if (isHover && hoverBackground) {
      return { background: hoverBackground }
    }

    return { background: background }
  }

  const calcBorder = (
    border: ButtonProps['border'],
    hoverBorder: ButtonProps['hoverBorder']
  ): CSSProperties => {
    return isHover ? { border: hoverBorder } : { border: border }
  }

  const calcBorderRadius = (
    borderRadius: ButtonProps['borderRadius']
  ): CSSProperties => {
    return { borderRadius: borderRadius }
  }

  const calcBoxShadow = (
    hoverBoxShadow: ButtonProps['hoverBoxShadow']
  ): CSSProperties => {
    return isHover ? { boxShadow: hoverBoxShadow } : { boxShadow: undefined }
  }

  const mouseEnterHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setIsHover(true)
  }

  const mouseLeaveHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setIsHover(false)
  }

  return {
    calcPadding,
    calcBackround,
    calcBorder,
    calcBorderRadius,
    calcBoxShadow,
    mouseEnterHandler,
    mouseLeaveHandler,
  }
}
