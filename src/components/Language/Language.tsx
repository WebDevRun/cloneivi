import { useState } from 'react'

import language from '../../assets/images/header/language.svg'
import { Button } from '../Button/Button'

import styles from './Language.module.scss'

export const Language = () => {
  const [lang, setLang] = useState("Ru")

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    lang === "Ru" ? setLang("En") : setLang("Ru")
  }

  return (
    <div className={styles.toggleLang}>
      <Button
        iconSrc={language}
        iconAlt="Язык"
        mode="language"
        onClick={handleClick}
      />
      <div className={styles.toggleLangText} >
        {lang}
      </div>
    </div>
  )
}
