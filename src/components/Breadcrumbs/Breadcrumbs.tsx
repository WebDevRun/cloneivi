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
  lastAsLink?: boolean
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  items,
  separator,
  lastAsLink = false,
}: BreadcrumbsProps) => {
  return (
    <ul className={styles.breadcrumbs}>
      {items.map((crumb, i) => (
        <li key={i} className={cn(styles.item, styles[separator])}>
          {/** Обернуть в компонент LinkBtn */}

          {lastAsLink && (
            <Link href={crumb.path} className={styles.link}>
              {crumb.text}
            </Link>
          )}

          {!lastAsLink && i !== items.length - 1 && (
            <Link href={crumb.path} className={styles.link}>
              {crumb.text}
            </Link>
          )}
          {!lastAsLink && i === items.length - 1 && crumb.text}
        </li>
      ))}
    </ul>
  )
}
