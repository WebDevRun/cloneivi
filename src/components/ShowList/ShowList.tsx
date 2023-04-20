import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import { ILinkList } from '../../types'

import styles from './ShowList.module.scss'

export interface INativeScroll {
  data: ILinkList
  col: 'single' | 'double'
}

export const ShowList: FC<INativeScroll> = ({ data, col }) => {
  return (
    <>
      <div className={styles.linksList}>
        <div className={styles.title}>{data.title}</div>
        <div className={cn(styles[col], styles.list)}>
          {data.items.map((item) => (
            <div className={styles.item} key={item.href}>
              <Link href={item.href} title={item.title}>
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
