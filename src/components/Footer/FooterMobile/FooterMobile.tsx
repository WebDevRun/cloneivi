import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

import Svg from '@/assets/svg/Svg'

import styles from './FooterMobile.module.scss'

export const FooterMobile = () => {
  const footerButtons = [
    {
      btnName: 'btn1',
      href: '/',
      icon: 'HomeIcon',
      btnText: 'Мой Иви',
    },
    {
      btnName: 'btn2',
      href: '/',
      icon: 'CatalogIcon',
      btnText: 'Каталог',
    },
    {
      btnName: 'btn3',
      href: '/',
      icon: 'SearchIcon',
      btnText: 'Поиск',
    },
    {
      btnName: 'btn4',
      href: '/',
      icon: 'AvatarIcon',
      btnText: 'Профиль',
    },
    {
      btnName: 'btn5',
      href: '/',
      icon: 'MoreIcon',
      btnText: 'Ещё',
    },
  ]

  const [activeButton, setActiveButton] = useState<string | null>('btn1')

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
