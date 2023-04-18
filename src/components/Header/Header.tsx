import Image from 'next/image'
import Link from 'next/link'

import logo from '@assets/images/common/ivi.svg'
import { HeaderSvg } from '@ui/svg/HeaderSvg'

import { Button } from '../../ui/Button'
import { Language } from '../../ui/Language'
import {IMenuItem, MENU} from "../../utils/consts"

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href='https://www.ivi.ru/'>
        <Image src={logo} alt='logo'></Image>
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
