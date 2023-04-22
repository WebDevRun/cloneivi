import cn from 'classnames'
import { FC } from 'react'

import styles from './ModalWindow.module.scss'

export interface ModalWindowProps {
  active: boolean
  setActive: any
  children: any
}

export const ModalWindow: FC<ModalWindowProps> = ({
  active,
  setActive,
  children,
}) => {
  return (
    <div
      className={cn(
        active ? (styles.modalWindowActive) : styles.modalWindow
      )}
    >
      <div
        className={cn(
          active ? (styles.modalContentActive) : styles.modalContent
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <label className={styles.closeBtn} onClick={() => setActive(false)}>X</label>
        {children}
      </div>
    </div>
  )
}
