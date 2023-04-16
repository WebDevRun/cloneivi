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
import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'

import arrowDown from './arrow-down.svg'
import styles from './SelectorButton.module.scss'

interface ISelectorButton {
  name: string
  disabled?: boolean
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
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
<<<<<<< HEAD
=======
>>>>>>> 95dbbef (refactor: some fix)
  const clickHandler: MouseEventHandler<HTMLInputElement> = () => {
    if (!disabled) {
      setActive(prevState => !prevState)
    }
  }

<<<<<<< HEAD
  return (
    <label className={selectButtonStyles}>
      <input type='checkbox'
             defaultChecked={active}
             onClick={clickHandler}
=======
=======
>>>>>>> 95dbbef (refactor: some fix)
  return (
    <label className={selectButtonStyles}>
      <input type='checkbox'
             defaultChecked={active}
<<<<<<< HEAD
             onClick={() => !disabled && setActive(prevState => !prevState)}
>>>>>>> 535ccac (chore: selector button)
=======
             onClick={clickHandler}
>>>>>>> 95dbbef (refactor: some fix)
      />
      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
        <div className={styles.selected}>{selectedItems.join(', ')}</div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <Image src={arrowDown} alt='arrow-down' />
=======
      <Image className={styles.arrow} src={arrowDown} alt={'arrow-down'} />
>>>>>>> 535ccac (chore: selector button)
=======
      <Image src={arrowDown} alt={'arrow-down'} />
>>>>>>> 95dbbef (refactor: some fix)
    </label>
  )
}