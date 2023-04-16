import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'

interface ILayout {
  children: ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>
}
