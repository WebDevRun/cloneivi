import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

import styles from './FooterMobile.module.scss'

import { FooterSvg } from '@/ui/svg/FooterSvg'

export const FooterMobile = () => {
  const footerButtons = [
    {
      btnName: 'btnOne',
      href: '/',
      icon: 'HomeIcon',
      btnText: 'Мой Иви',
    },
    {
      btnName: 'btnTwo',
      href: '/',
      icon: 'CatalogIcon',
      btnText: 'Каталог',
    },
    {
      btnName: 'btnThree',
      href: '/',
      icon: 'SearchIcon',
      btnText: 'Поиск',
    },
    {
      btnName: 'btnFour',
      href: '/',
      icon: 'AvatarIcon',
      btnText: 'Профиль',
    },
    {
      btnName: 'btnFive',
      href: '/',
      icon: 'MoreIcon',
      btnText: 'Ещё',
    },
  ]

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
              <FooterSvg
                icon={btn.icon}
                fill={activeButton === btn.btnName ? 'white' : 'gray'}
              />
            </div>
            <p className={styles.tabBarText}>{btn.btnText}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
