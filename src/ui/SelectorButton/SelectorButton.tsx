<<<<<<< HEAD
<<<<<<< HEAD
import cn from 'classnames'
import Image from 'next/image'
import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'

import arrowDown from './arrow-down.svg'
import styles from './SelectorButton.module.scss'

interface SelectorButtonProps {
  name: string
  disabled?: boolean
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  selectedItems: string[]
}

export const SelectorButton: FC<SelectorButtonProps> = ({ name, active, setActive, disabled, selectedItems }) => {
=======
import React, { FC, SetStateAction } from 'react'
import styles from './SelectorButton.module.scss'
=======
>>>>>>> 4b6dfc5 (refactor: remove selectButton from index.tsx, import refactoring)
import cn from 'classnames'
import Image from 'next/image'
import React, { FC, SetStateAction } from 'react'

import arrowDown from './arrow-down.svg'
import styles from './SelectorButton.module.scss'

interface ISelectorButton {
  name: string
  disabled?: boolean
  active: boolean
  setActive: React.Dispatch<SetStateAction<boolean>>
  selectedItems: string[]
}

export const SelectorButton: FC<ISelectorButton> = ({ name, active, setActive, disabled, selectedItems }) => {
>>>>>>> 535ccac (chore: selector button)
  const selectButtonStyles = cn(
    styles.selectButton,
    active && !disabled && styles.selectButtonActive,
    disabled && styles.selectButtonDisabled
  )

<<<<<<< HEAD
  const clickHandler: MouseEventHandler<HTMLInputElement> = () => {
    if (!disabled) {
      setActive(prevState => !prevState)
    }
  }

  return (
    <label className={selectButtonStyles}>
      <input type='checkbox'
             defaultChecked={active}
             onClick={clickHandler}
=======
  return (
    <label className={selectButtonStyles}>
      <input type='checkbox'
             checked={active}
             onClick={() => !disabled && setActive(prevState => !prevState)}
>>>>>>> 535ccac (chore: selector button)
      />
      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
        <div className={styles.selected}>{selectedItems.join(', ')}</div>
      </div>
<<<<<<< HEAD
      <Image src={arrowDown} alt='arrow-down' />
=======
      <Image className={styles.arrow} src={arrowDown} alt={'arrow-down'} />
>>>>>>> 535ccac (chore: selector button)
    </label>
  )
}