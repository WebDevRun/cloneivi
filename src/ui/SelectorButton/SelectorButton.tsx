import React, { FC, SetStateAction } from 'react'
import styles from './SelectorButton.module.scss'
import cn from 'classnames'
import arrowDown from './arrow-down.svg'
import Image from 'next/image'

interface ISelectorButton {
  name: string
  disabled?: boolean
  active: boolean
  setActive: React.Dispatch<SetStateAction<boolean>>
  selectedItems: string[]
}

export const SelectorButton: FC<ISelectorButton> = ({ name, active, setActive, disabled, selectedItems }) => {
  const selectButtonStyles = cn(
    styles.selectButton,
    active && !disabled && styles.selectButtonActive,
    disabled && styles.selectButtonDisabled
  )

  return (
    <label className={selectButtonStyles}>
      <input type='checkbox'
             checked={active}
             onClick={() => !disabled && setActive(prevState => !prevState)}
      />
      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
        <div className={styles.selected}>{selectedItems.join(', ')}</div>
      </div>
      <Image className={styles.arrow} src={arrowDown} alt={'arrow-down'} />
    </label>
  )
}