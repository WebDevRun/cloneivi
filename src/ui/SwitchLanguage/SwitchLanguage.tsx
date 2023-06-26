import { useRouter } from 'next/router'
import { FC } from 'react'

import { Button } from '../Button'

import styles from './SwitchLanguage.module.scss'

export interface SwitchLanguageProps {}

export const SwitchLanguage: FC<SwitchLanguageProps> = () => {
  const router = useRouter()

  const handleClick = () => {
    if (router.locale === 'ru') {
      router.push(
        {
          pathname: router.pathname,
          query: router.query,
        },
        router.asPath,
        { locale: 'en' },
      )
    } else {
      router.push(
        {
          pathname: router.pathname,
          query: router.query,
        },
        router.asPath,
        { locale: 'ru' },
      )
    }
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
        <div className={styles.toggleLangText}>
          {router.locale?.toUpperCase()}
        </div>
      </div>
    </div>
  )
}
