import { FC, ReactNode } from 'react'

import styles from './AppLayout.module.scss'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>
}
