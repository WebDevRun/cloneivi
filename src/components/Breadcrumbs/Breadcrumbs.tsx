import Link from 'next/link'
import { FC, ReactNode } from 'react'

import styles from './Breadcrumbs.module.scss'

export type CrumbItem = {
  text: ReactNode
  path: string
}

export interface BreadcrumbsProps {
  items: CrumbItem[]
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  items,
}: BreadcrumbsProps) => {
  
  return (
    <div className={styles.breadcrumbs}>
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1
        if (!isLastItem) {
          return (
            <>
              {/** Обернуть в компонент LinkBtn */}
              <Link href={crumb.path} key={i} className={styles.link}>
                {crumb.text}
              </Link>
              <span> / </span>
            </>
          )
        } else {
          return crumb.text
        }
      })}
    </div>
  )
}
