import Image from 'next/image'
import Link from 'next/link'

import logo from '@assets/images/common/ivi.svg'
import { HeaderSvg } from '@ui/svg/HeaderSvg'

import { Button } from '../../layouts/Button'
import { Language } from '../../ui/Language'
import { HEADER_MENU } from '../../utils/consts'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="https://www.ivi.ru/">
        <Image src={logo} alt="logo" />
      </Link>

      <nav className={styles.menu}>
        {HEADER_MENU.map((item) => (
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
            background="transparent"
            horizontalPadding={11}
            verticalPadding={7}
            onClick={() => {}}
          >
            <p style={{ color: 'red' }}>Тест</p>
          </Button>
        </div>
        <div className={styles.buttonMobile}>
          {/* <Button mode="primaryMob" text="Смотреть 30 дней за 1₽" /> */}
        </div>
        <div>
          {/* <Button
            iconSvg={<HeaderSvg size={16} icon="search" />}
            iconAlt="Поиск"
            mode="search"
            text="Поиск"
          /> */}
        </div>
      </div>

      <Link
        className={styles.notifyLink}
        href="https://www.ivi.ru/profile/pull_notifications"
      >
        <HeaderSvg size={16} icon="notify" />
      </Link>

      <div className={styles.headerAvatar}>
        {/* <Button
          iconSvg={<HeaderSvg size={20} icon="profile" />}
          iconAlt="Воити в аккаунт"
          mode="signIn"
        /> */}
      </div>

      <div className={styles.language}>
        <Language />
      </div>
    </div>
  )
}
