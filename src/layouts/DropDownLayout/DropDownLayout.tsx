import cn from 'classnames'
import { FC, ReactNode } from 'react'

import styles from './DropDownLayout.module.scss'

export interface ModalLayoutProps {
  children: ReactNode
  size?: 'big' | 'small'
  position?: 'left' | 'center' | 'right'
  type: 'filter' | 'header'
}

export const DropDownLayout: FC<ModalLayoutProps> = ({
  children,
  position = 'center',
  size = 'big',
  type,
}) => {
  return (
    <div className={cn(
      styles.dropDownLayout,
      styles[type],
      size && styles[size],
      position && styles[position],
    )}>
      {children}
    </div>
  )
}