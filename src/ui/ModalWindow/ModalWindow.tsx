import cn from 'classnames'
import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react'

import { CommonSvg } from '../svg/CommonSvg'

import styles from './ModalWindow.module.scss'

export interface ModalWindowProps {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

export const ModalWindow: FC<ModalWindowProps> = ({
  active,
  setActive,
  children,
}) => {
  const [fillColor, setFillColor] = useState<string>('gray')
  return (
    <div className={cn(active ? styles.modalWindowActive : styles.modalWindow)}>
      <div
        className={cn(active ? styles.modalContentActive : styles.modalContent)}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={() => setActive(false)}
          onMouseEnter={() => setFillColor('white')}
          onMouseLeave={() => setFillColor('gray')}
        >
          <CommonSvg fill={fillColor} icon='close' size={20} />
        </button>
        {children}
      </div>
    </div>
  )
}
