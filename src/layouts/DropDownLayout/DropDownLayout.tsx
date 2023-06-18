import cn from 'classnames'
import { FC, ReactNode } from 'react'

import styles from './DropDownLayout.module.scss'

export interface ModalLayoutProps {
  children: ReactNode
  size?: 'big' | 'small' | 'middle'
  position?: 'left' | 'center' | 'right'
  type: 'filter' | 'header'
  zIndex?: number
}

export const DropDownLayout: FC<ModalLayoutProps> = ({
  children,
  position,
  size,
  type,
  zIndex= 99
}) => {
  return (
    <div
      className={cn(
        styles.dropDownLayout,
        styles[type],
        size && styles[size],
        position && styles[position],
      )}
      style={{zIndex: zIndex}}
    >
      {children}
    </div>
  )
}
