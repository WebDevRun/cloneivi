import cn from 'classnames'
import { FC, useEffect, useState } from 'react'

import { IDataForLinks } from '../../types'
// Данные импортируются здесь, но можно передавать пропсом
import data from '../header-dropdown.json'
import data2 from '../header-dropdown2.json'
import { NativeScroll } from '../NativeScroll'
import { ShowList } from '../ShowList/ShowList'
import { SubscriptionWidget } from '../SubscriptionWidget/SubscriptionWidget'

import styles from './HeaderDropdown.module.scss'

export const HeaderDropdown: FC = () => {
  //const lists = data as IDataForLinks
  const [active, setActive] = useState('headerDropdown')
  const [lists, setLists] = useState(data)

  let mainCn = cn(styles[active])

  function eventHandler(e: CustomEventInit<any>) {
    if (e.detail === 'Фильмы') {
      setLists(data)
      setActive('headerDropdownActive')
    } else if (e.detail === 'Сериалы') {
      setLists(data2)
      setActive('headerDropdownActive')
    } else setActive('headerDropdown')
  }

  useEffect(() => {
    window.addEventListener('myCustomEventName', eventHandler)

    return () => {
      window.removeEventListener('myCustomEventName', eventHandler)
    }
  })

  return (
    <div className={mainCn}>
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
