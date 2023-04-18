import Image from 'next/image'
import Link from 'next/link'

import logo from '@assets/images/common/ivi.svg'
import notify from '@assets/images/header/notifications.svg'
import search from '@assets/images/header/search.svg'
import { HeaderSvg } from '@ui/svg/HeaderSvg'

import { Button } from '../Button'
import { Language } from '../Language/Language'

import styles from './Header.module.scss'


const menu = [
  { id: '1', name: 'Мой Иви', href: 'https://www.ivi.ru/' },
  { id: '2', name: 'Что нового', href: 'https://www.ivi.ru/new' },
  { id: '3', name: 'Фильмы', href: 'https://www.ivi.ru/movies' },
  { id: '4', name: 'Сериалы', href: 'https://www.ivi.ru/series' },
  { id: '5', name: 'Мультфильмы', href: 'https://www.ivi.ru/animation' },
  { id: '6', name: 'TV+', href: 'https://www.ivi.ru/tvplus' }
]

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href='https://www.ivi.ru/'>
        <Image src={logo} alt='logo'></Image>
      </Link>

      <nav className={styles.menu}>
        {menu.map((item) => (
          <li className={styles.menuItem} key={item.id}>
            <Link href={item.href} title={item.name}>
              <div className={styles.menuItemText}>{item.name}</div>
            </Link>
          </li>
        ))}
      </nav>

      <div className={styles.topWide}>
        <div className={styles.additionalButton}>
          <Button mode='primary' text='Оплатить подписку' />
        </div>
        <div className={styles.buttonMobile}>
          <Button
            mode='primaryMob'
            text='Смотреть 30 дней за 1₽'
          />
        </div>
        <div>
          <Button
            iconSvg={<HeaderSvg size={16} icon='search' />}
            iconAlt='Поиск'
            mode='search'
            text='Поиск'
          />
        </div>
      </div>

      <Link
        className={styles.notifyLink}
        href='https://www.ivi.ru/profile/pull_notifications'
      >
        <HeaderSvg size={16} icon='notify' />
      </Link>

      <div className={styles.headerAvatar}>
        <Button
          iconSvg={<HeaderSvg size={20} icon='profile' />}
          iconAlt='Воити в аккаунт'
          mode='signIn'
        />
      </div>

      <div className={styles.language}>
        <Language />
      </div>
    </div>
  )
}
