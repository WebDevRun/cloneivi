import Link from 'next/link'
import { FC } from 'react'

import { ILinkList } from '../../types'

import styles from './NativeScroll.module.scss'

export interface INativeScroll {
  data: ILinkList
}

export const NativeScroll: FC<INativeScroll> = ({ data }) => {

  return (
    <div className={styles.nativeScroll}>
      <div className={styles.nativeScrollInner}>
        <div className={styles.list}>
          {data.items.map((item) => (
            <div className={styles.item} key={item.href}>
              <Link href={item.href} title={item.title}>
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
