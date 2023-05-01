import cn from 'classnames'
import Image from 'next/image'
import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'

import arrowDown from '@assets/images/selectors/arrow-down.svg'

import styles from './FilterSelectorButton.module.scss'

interface SelectorButtonProps {
  title: string
  disabled?: boolean
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  selectedItems: string[] | number
}

export const FilterSelectorButton: FC<SelectorButtonProps> = ({title, active, setActive, disabled, selectedItems}) => {

  const clickHandler: MouseEventHandler<HTMLInputElement> = () => {
    if (!disabled) {
      setActive((prevState) => !prevState)
    }
  }

  const getSelected = () => {
    if (typeof selectedItems === 'number' && selectedItems > 0) {
      return selectedItems
    }

    if (typeof selectedItems === 'object') {
      return selectedItems.join(', ')
    }

    return ''
  }

  return (
    <label className={cn(
      styles.selectButton,
      active && !disabled && styles.selectButtonActive,
      disabled && styles.selectButtonDisabled,
    )}>
      <input type='checkbox' defaultChecked={active} onClick={clickHandler} />
      <div className={styles.content}>
        <span className={styles.name}>{title}</span>
        <div className={styles.selected}>{getSelected()}</div>
      </div>
      <Image src={arrowDown} alt='arrow-down' />
    </label>
  )
}
