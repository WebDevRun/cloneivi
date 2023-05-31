<<<<<<< HEAD
import cn from 'classnames'
import { FC, ReactNode } from 'react'

import styles from './DropDownLayout.module.scss'

export interface ModalLayoutProps {
  children: ReactNode
  size?: 'big' | 'small' | 'middle'
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
      styles[size],
      styles[position],
    )}>
      {children}
    </div>
  )
}
=======
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
  position,
  size,
  type,
}) => {
  return (
    <div
      className={cn(
        styles.dropDownLayout,
        styles[type],
        size && styles[size],
        position && styles[position]
      )}
    >
      {children}
    </div>
  )
}
>>>>>>> 70112db8366b4d0ff8109547858b93c6e6e07ded
