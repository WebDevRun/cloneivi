import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import footerButtons from './footerButtons.json'
import styles from './FooterMobile.module.scss'

import { INameIcons, INameIconsExt } from '@/types/Icons'
import { Svg } from '@/ui/Svg'


export const FooterMobile = () => {
  const { t } = useTranslation(['common'])

  const [activeButton, setActiveButton] = useState<string | null>('btnOne')

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }
  return (
    <>
      <div className={styles.tabBar}>
        {footerButtons.map((btn, index) => (
          <Link
            key={index}
            onClick={() => handleClick(btn.btnName)}
            className={cn(styles.tabBarItem, {
              [styles.active]: activeButton === btn.btnName,
            })}
            href={btn.href}
          >
            <div className={styles.light}></div>
            <div className={styles.tabBarIcon}>
              <Svg
                icon={btn.icon as INameIcons | INameIconsExt}
                fill={activeButton === btn.btnName ? 'white' : 'gray'}
                ext={btn.icon == 'avatar' ? true : false}
              />
            </div>
            <p className={styles.tabBarText}>{t(btn.btnText)}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
