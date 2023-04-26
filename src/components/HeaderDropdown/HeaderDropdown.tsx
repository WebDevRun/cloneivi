import cn from 'classnames'
import { useTranslation } from 'next-i18next'
import { FC, useEffect, useState } from 'react'

import { IDataForLinks } from '../../types'
// Данные импортируются здесь, но можно передавать пропсом
import movies from '../movies.json'
import { NativeScroll } from '../NativeScroll'
import series from '../series.json'
import { ShowList } from '../ShowList/ShowList'
import { SubscriptionWidget } from '../SubscriptionWidget/SubscriptionWidget'

import styles from './HeaderDropdown.module.scss'

export const HeaderDropdown: FC = () => {
  const { t } = useTranslation(['header'])
  //const lists = data as IDataForLinks
  const [active, setActive] = useState('headerDropdown')
  const [lists, setLists] = useState(movies)

  let mainCn = cn(styles[active])

  function eventHandler(e: CustomEventInit<any>) {
    if (e.detail === t('header:movies')) {
      setLists(movies)
      setActive('headerDropdownActive')
    } else if (e.detail === t('header:serials')) {
      setLists(series)
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
