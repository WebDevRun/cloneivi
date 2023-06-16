import cn from 'classnames'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction } from 'react'

import arrowDown from '@assets/images/selectors/arrow-down.svg'

import styles from './FilterSelectorButton.module.scss'

interface SelectorButtonProps {
  title: string
  disabled?: boolean
  active: boolean
  setActive: () => void
  selectedItems: string[]
}

export const FilterSelectorButton: FC<SelectorButtonProps> = ({title, active, setActive, disabled, selectedItems}) => {

  return (
    <label className={cn(
      styles.selectButton,
      active && !disabled && styles.selectButtonActive,
      disabled && styles.selectButtonDisabled,
    )}>
      <input type='checkbox' defaultChecked={active} onClick={setActive} />
      <div className={styles.content}>
        <span className={styles.name}>{title}</span>
        <div className={styles.selected}>{selectedItems.join(', ')}</div>
      </div>
      <Image src={arrowDown} alt='arrow-down' />
    </label>
  )
}
