import Image from 'next/image'
import Link from 'next/link'

import { IMenuItem } from '@/types/navigate'
import logo from '@assets/images/common/ivi.svg'
import { HeaderSvg } from '@ui/svg/HeaderSvg'

import { Button } from '../../ui/Button'
import { Language } from '../../ui/Language'
import { MENU } from '../../utils/consts'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="https://www.ivi.ru/">
        <Image src={logo} alt="logo" />
      </Link>

      <nav className={styles.menu}>
        {MENU.map((item: IMenuItem) => (
          <li className={styles.menuItem} key={item.id}>
            <Link href={item.href} title={item.name}>
              <div className={styles.menuItemText}>{item.name}</div>
            </Link>
          </li>
        ))}
      </nav>

      <div className={styles.topWide}>
        <div className={styles.additionalButton}>
          <Button
            background='primary'
            text="Оплатить подписку"
          />
        </div>
        <div className={styles.buttonMobile}>
          <Button text="Смотреть 30 дней за 1₽" />
        </div>
        <div  className={styles.headerSearch}>
          <Button
            background='transparent'
            icon='search'
            text="Поиск"
          />
        </div>
      </div>

      <Link
        className={styles.notifyLink}
        href="https://www.ivi.ru/profile/pull_notifications"
      >
        <HeaderSvg icon="notify" />
      </Link>

      <div className={styles.language}>
        <Language />
      </div>
    </div>
  )
}
