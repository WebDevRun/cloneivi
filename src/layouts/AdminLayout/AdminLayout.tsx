import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { FC, ReactNode } from 'react'

import { H2, Text } from '@/ui/ui'

import styles from './AdminLayout.module.scss'

export interface AdminLayoutProps {
  children: ReactNode
}

export const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const links = ['films', 'genres']

  return (
    <div className={styles.adminLayout}>
      <H2 className={styles.title}>{t('title')}</H2>
      <div className={styles.pageContainer}>
        <nav className={styles.navigationBar}>
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className={cn(styles.listItem, {
                  [styles.listItem_active]:
                    router.pathname === `/admin/${link}`,
                })}
              >
                <Link className={styles.navigationItem} href={`/admin/${link}`}>
                  {t(`${link}`)}
                </Link>
              </li>
            )
          })}
        </nav>
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </div>
  )
}
