import { FC, ReactNode } from 'react'

import { Header } from '@components/Header'

import styles from './AppLayout.module.scss'

export interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.appLayout}>
      <header>
        <Header />
        {/*<DropDownLayout position='center' size='small' type='header'>
          <HeaderDropdown />
        </DropDownLayout>*/}
      </header>
      <main>{children}</main>
      {/** <Footer /> */}
    </div>
  )
}
