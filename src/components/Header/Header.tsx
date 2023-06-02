import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { LinkBtn } from '@/ui/LinkBtn'
import { Svg } from '@/ui/Svg'
import { SwitchLanguage } from '@/ui/SwitchLanguage'
import logo from '@assets/images/common/ivi.svg'

import { Button } from '../../ui/Button'

import styles from './Header.module.scss'
import menu from './menu.json'

export const Header: FC = () => {
  const { t } = useTranslation(['common'])

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    const event = new CustomEvent('myCustomEventName', {
      detail: target.closest('[data-test]')?.getAttribute('data-test'),
    })

    dispatchEvent(event)
  }

  return (
    <div className={styles.header} onMouseOver={handleMouseOver}>
      <div className={styles.headerLogo}>
        <Link href='https://www.ivi.ru/'>
          <Image src={logo} alt={t('common:logo') as string}></Image>
        </Link>
      </div>

      <nav className={styles.menu}>
        {menu.map((item) => (
          <li
            className={styles.menuItem}
            key={item.id}
            data-test={item.dataTest}
          >
            <Link href={item.href} title={t(item.name) as string}>
              <div className={styles.menuItemText}>{t(item.name)}</div>
            </Link>
          </li>
        ))}
      </nav>

      <div className={styles.topWide}>
        <div
          data-test='header-addButton'
          className={styles.additionalButton}
        >
          <Button
            size='small'
            background='primary'
            onClick={() => {}}
            text={t('common:pay') as string}
          />
        </div>
        <div className={styles.buttonMobile}>
          <Button size='small' text={t('common:see') as string} />
        </div>
        <div className={styles.headerSearch}>
          <Button
            background='transparent'
            icon='search'
            text={t('common:search') as string}
          />
        </div>
      </div>

      <Link
        data-test='header-notify'
        className={styles.notifyLink}
        href='https://www.ivi.ru/profile/pull_notifications'
      >
        <Svg icon='notify' />
      </Link>

      <div data-test='header-profile' className={styles.profile}>
        <LinkBtn
          href='https://www.ivi.ru/profile'
          mode='account'
          background='default'
          icon='profile'
        />
      </div>

      <div className={styles.language}>
        <SwitchLanguage />
      </div>
    </div>
  )
}
