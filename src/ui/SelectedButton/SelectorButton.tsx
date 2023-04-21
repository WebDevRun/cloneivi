import cn from 'classnames'
import Image from 'next/image'
import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'

import arrowDown from '@assets/images/selectors/arrow-down.svg'

import styles from './SelectorButton.module.scss'

interface SelectorButtonProps {
  name: string
  disabled?: boolean
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  selectedItems: string[]
}

export const SelectorButton: FC<SelectorButtonProps> = ({
  name,
  active,
  setActive,
  disabled,
  selectedItems,
}) => {
  const selectButtonStyles = cn(
    styles.selectButton,
    active && !disabled && styles.selectButtonActive,
    disabled && styles.selectButtonDisabled
  )

  const clickHandler: MouseEventHandler<HTMLInputElement> = () => {
    if (!disabled) {
      setActive((prevState) => !prevState)
    }
  }

  return (
    <label className={selectButtonStyles}>
      <input type='checkbox' defaultChecked={active} onClick={clickHandler} />
      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
        <div className={styles.selected}>{selectedItems.join(', ')}</div>
      </div>
      <Image src={arrowDown} alt='arrow-down' />
    </label>
  )
}
