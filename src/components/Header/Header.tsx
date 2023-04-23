import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import logo from '../../assets/images/common/ivi.svg'
import notify from '../../assets/images/header/notifications.svg'
import search from '../../assets/images/header/search.svg'
import login from '../../assets/images/header/user.svg'
import { Button } from '../Button'
import { Language } from '../Language/Language'

import styles from './Header.module.scss'

const menu = [
  { id: '1', name: 'header:myIvi', href: 'https://www.ivi.ru/' },
  { id: '2', name: 'header:whatsNew', href: 'https://www.ivi.ru/new' },
  { id: '3', name: 'header:movies', href: 'https://www.ivi.ru/movies' },
  { id: '4', name: 'header:serials', href: 'https://www.ivi.ru/series' },
  { id: '5', name: 'header:animations', href: 'https://www.ivi.ru/animation' },
  { id: '6', name: 'header:tv', href: 'https://www.ivi.ru/tvplus' },
]

export const Header: FC = () => {
  const { t } = useTranslation(['header'])

  const handleMouseOver = (e: React.MouseEvent<HTMLLinkElement>) => {
    const target = e.target as HTMLLinkElement
    const event = new CustomEvent('myCustomEventName', {
      detail: target.textContent,
    })

    window.dispatchEvent(event)
  }

  return (
    <div className={styles.header}>
      <Link className={styles.headerLogo} href="https://www.ivi.ru/">
        <Image src={logo} alt={t('header:logo') as string}></Image>
      </Link>

      <nav className={styles.menu} onMouseOver={handleMouseOver}>
        {menu.map((item) => (
          <li className={styles.menuItem} key={item.id}>
            <Link href={item.href} title={item.name}>
              <div className={styles.menuItemText}>{t(item.name)}</div>
            </Link>
          </li>
        ))}
      </nav>

      <div className={styles.topWide}>
        <div className={styles.additionalButton}>
          <Button mode="primary" text={'pay'} />
        </div>
        <div className={styles.buttonMobile}>
          <Button mode="primaryMob" text={t('header:see') as string} />
        </div>
        <div className={styles.headerSearch}>
          <Button
            iconSrc={search}
            iconAlt={t('header:search') as string}
            mode="search"
            text={t('header:search') as string}
          />
        </div>
      </div>

      <Link
        className={styles.notifyLink}
        href="https://www.ivi.ru/profile/pull_notifications"
      >
        <Image src={notify} alt="Уведомления"></Image>
      </Link>

      <div className={styles.headerAvatar}>
        <Button
          iconSrc={login}
          iconAlt={t('header:logIn') as string}
          mode="signIn"
        />
      </div>

      <div className={styles.language}>
        <Language />
      </div>
    </div>
  )
}
