import { useState } from 'react'

import { Button } from '../../ui/Button/Button'

import styles from './Language.module.scss'

export const Language = () => {
  const [lang, setLang] = useState('Ru')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    lang === 'Ru' ? setLang('En') : setLang('Ru')
  }

  return (
    <div className={styles.toggleLang}>
      <Button
        icon='language'
        background='transparent'
        size='big'
        onClick={handleClick}
      />
      <div className={styles.toggleLangText}>
        {lang}
      </div>
    </div>
  )
}
