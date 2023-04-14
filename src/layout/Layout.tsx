import { FC } from 'react'
import styles from './Layout.module.scss'

interface ILayout {
  children: JSX.Element[] | JSX.Element
}

export const Layout: FC<ILayout> = ({ children }: ILayout) => {
  return <div className={styles.layout}>{children}</div>
}
