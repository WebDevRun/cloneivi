import { FC, ReactNode } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeaderDropdown } from '@/components/HeaderDropdown'

import { DropDownLayout } from '../DropDownLayout'

import styles from './AppLayout.module.scss'

export interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <DropDownLayout position='center' size='small' type='header'>
        <HeaderDropdown />
      </DropDownLayout>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
