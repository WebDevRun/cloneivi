import { FC } from 'react'

import { IDataForLinks } from '../../types'
// Данные импортируются здесь, но можно передавать пропсом
import data from '../header-dropdown.json'
import { NativeScroll } from '../NativeScroll'
import { ShowList } from '../ShowList/ShowList'
import { SubscriptionWidget } from '../SubscriptionWidget/SubscriptionWidget'

import styles from './HeaderDropdown.module.scss'

export const HeaderDropdown: FC = () => {
  const lists = data as IDataForLinks
  return (
    <div className={styles.headerDropdown}>
      <div>
        <div className={styles.headerDropdownBody}>
          <div className={styles.dropdownContent}>
            <div className={styles.doubleColumn}>
              <ShowList data={lists.genres} col="double" />
            </div>

            <div className={styles.singleColumn}>
              <ShowList data={lists.countries} col="single" />
              <ShowList data={lists.years} col="single" />
            </div>

            <div className={styles.sideContent}>
              <NativeScroll data={lists.extra} />
              <div className={styles.sideContentWidget}>
                <SubscriptionWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
