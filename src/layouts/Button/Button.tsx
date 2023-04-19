import { FC, MouseEventHandler, ReactNode } from 'react'

import styles from './Button.module.scss'
import { useButton } from './useButton'

export interface ButtonProps {
  background: string
  verticalPadding: number
  horizontalPadding: number
  onClick: MouseEventHandler<HTMLButtonElement>
  border?: string
  borderRadius?: number
  hoverBackground?: string
  hoverBoxShadow?: string
  hoverBorder?: string
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({
  background,
  verticalPadding,
  horizontalPadding,
  onClick,
  border,
  borderRadius = 8,
  hoverBackground,
  hoverBoxShadow,
  hoverBorder,
  children,
}) => {
  const {
    calcBackround,
    calcBorder,
    calcBorderRadius,
    calcBoxShadow,
    calcPadding,
    mouseEnterHandler,
    mouseLeaveHandler,
  } = useButton()

  return (
    <button
      type="button"
      style={{
        ...calcPadding(verticalPadding, horizontalPadding),
        ...calcBackround(background, hoverBackground),
        ...calcBoxShadow(hoverBoxShadow),
        ...calcBorder(border, hoverBorder),
        ...calcBorderRadius(borderRadius),
      }}
      className={styles.button}
      onClick={onClick}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}
    </button>
  )
}
