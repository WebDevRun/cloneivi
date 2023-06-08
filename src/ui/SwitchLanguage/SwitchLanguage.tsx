import { useRouter } from 'next/router'
import { FC } from 'react'

import { Button } from '../Button'

import styles from './SwitchLanguage.module.scss'

export interface SwitchLanguageProps {}

export const SwitchLanguage: FC<SwitchLanguageProps> = () => {
  const { locale } = useRouter()
  let router = useRouter()

  const handleClick = () => {

    if (locale === 'ru') {
      router.push('', undefined, { locale: 'en' })
    } else router.push('', undefined, { locale: 'ru' })

  }

  return (
    <div className={styles.switchLanguage}>
      <div className={styles.toggleLang}>
        <Button
          icon='language'
          background='transparent'
          size='big'
          onClick={handleClick}
        />
        <div className={styles.toggleLangText}>{locale?.toUpperCase()}</div>
      </div>
    </div>
  )
}
