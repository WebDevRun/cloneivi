import cn from 'classnames'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

import styles from './Breadcrumbs.module.scss'

export type CrumbItem = {
  text: ReactNode
  path: string
}

export interface BreadcrumbsProps {
  items: CrumbItem[]
  separator: 'slash' | 'dot'
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  items,
  separator,
}: BreadcrumbsProps) => {
  return (
    <ul className={styles.breadcrumbs}>
      {items.map((crumb, i) => (
        <li key={i} className={cn(styles.item, styles[separator])}>
          {/** Обернуть в компонент LinkBtn */}
          {i !== items.length - 1 && (
            <Link href={crumb.path} className={styles.link}>
              {crumb.text}
            </Link>
          )}
          {i === items.length - 1 && crumb.text}
        </li>
      ))}
    </ul>
  )
}
