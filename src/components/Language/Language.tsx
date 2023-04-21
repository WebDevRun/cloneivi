import { useRouter } from 'next/router'
import { useState } from 'react'

import language from '../../assets/images/header/language.svg'
import { Button } from '../Button/Button'

import styles from './Language.module.scss'

export const Language = () => {
  const [lang, setLang] = useState('Ru')
  let router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (lang === 'Ru') {
      router.push('/', '/', { locale: 'en' })
      setLang('En')
    } else {
      router.push('/', '/', { locale: 'ru' })
      setLang('Ru')
    }
  }

  return (
    <div className={styles.toggleLang}>
      <Button
        iconSrc={language}
        iconAlt="Язык"
        mode="language"
        onClick={handleClick}
      />
      <div className={styles.toggleLangText}>{lang}</div>
    </div>
  )
}
