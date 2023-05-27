import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import { Button } from '../Button'

import styles from './SwitchLanguage.module.scss'

export interface SwitchLanguageProps {}

export const SwitchLanguage: FC<SwitchLanguageProps> = () => {
  const [index, setIndex] = useState(0)
  const { locale, locales, pathname } = useRouter()
  let router = useRouter()

  const handleClick = () => {
    if (!locales) return

    if (index === (locales.length as number) - 1) {
      setIndex(0)
    } else setIndex((prevLangNum) => prevLangNum + 1)

    router.push(
      `/${locales[index]}${router.asPath}`,
      `/${locales[index]}${router.asPath}`,
      {
        locale: `${locales[index]}`,
      },
    )
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
