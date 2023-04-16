import { FC, ReactNode } from 'react'

import styles from './AppLayout.module.scss'

interface ILayout {
  children: ReactNode
}

export const AppLayout: FC<ILayout> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>
}
