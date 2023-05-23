import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { ILinkList } from '../../types/dataLinks'

import styles from './ShowList.module.scss'

export interface IShowList {
  data: ILinkList
  column?: 'single' | 'double'
}

export const ShowList: FC<IShowList> = ({ data, column = 'single' }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.linksList}>
      <div className={styles.title}>{data.title}</div>
      <ul className={cn(styles[column], styles.list)}>
        {data.items.map((item, index) => (
          <li className={styles.item} key={index}>
            <Link href={item.href} title={item.title}>
              {t(item.text)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
