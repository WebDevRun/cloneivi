import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { FC, ReactNode } from 'react'

import { Text } from '@/ui/ui'

import styles from './AdminLayout.module.scss'

export interface AdminLayoutProps {
  children: ReactNode
}

export const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  const { t } = useTranslation(['adminPage'])
  const links = ['films', 'genres']

  return (
    <div className={styles.adminLayout}>
      <nav className={styles.navigationBar}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={styles.navigationItem} href={`/admin/${link}`}>
                {t(`adminPage:${link}`)}
              </Link>
            </li>
          )
        })}
      </nav>
      <div className={styles.contentContainer}>
        <Text as='h2' variant='titleH2' className={styles.title}>
          {t('adminPage:title')}
        </Text>
        {children}
      </div>
    </div>
  )
}
