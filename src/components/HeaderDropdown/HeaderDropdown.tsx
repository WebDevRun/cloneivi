import cn from 'classnames'
import { useTranslation } from 'next-i18next'
import { FC, useEffect, useState } from 'react'

import { Button } from '@/ui/Button'

import cartoons from '../cartoons.json'
import movies from '../movies.json'
import { NativeScroll } from '../NativeScroll'
import series from '../series.json'
import { ShowList } from '../ShowList/ShowList'
import { SubscriptionWidget } from '../SubscriptionWidget/SubscriptionWidget'
import tv from '../tv.json'

import styles from './HeaderDropdown.module.scss'

export const HeaderDropdown: FC = () => {
  const { t } = useTranslation(['header'])
  const [active, setActive] = useState('headerDropdown')
  const [lists, setLists] = useState(movies)
  const [isTv, setIsTv] = useState(false)
  const [sideFit, setSideFit] = useState('')

  let mainCn = cn(styles[active])
  let sideCn = cn(styles.sideContent, styles[sideFit])

  function eventHandler(e: CustomEventInit<any>) {
    setSideFit('')
    setIsTv(false)
    switch (e.detail) {
      case t('header:movies'):
        setLists(movies)
        setActive('headerDropdownActive')
        break
      case t('header:serials'):
        setLists(series)
        setActive('headerDropdownActive')
        break
      case t('header:animations'):
        setLists(cartoons)
        setActive('headerDropdownActive')
        break
      case t('header:tv'):
        setIsTv(true)
        setLists(tv)
        setActive('headerDropdownActive')
        setSideFit('sideContentFull')
        break
      default:
        setActive('headerDropdown')
    }
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
            {!!lists.genres.items.length && (
              <div className={styles.doubleColumn}>
                <ShowList data={lists.genres} col='double' />
              </div>
            )}

            {(!!lists.countries.items.length || !!lists.years.items.length) && (
              <div className={styles.singleColumn}>
                <ShowList data={lists.countries} col='single' />
                <ShowList data={lists.years} col='single' />
              </div>
            )}

            <div className={sideCn}>
              <div className={styles.group}>
                <NativeScroll data={lists.extra} />
                {isTv && <Button text='Телепрограмма' background='gray' />}
              </div>
              {isTv && (
                <div className={styles.mainContentTv}>
                  <div className={styles.title}>Федеральные каналы</div>
                  <div className={styles.title}>Спортивные каналы</div>
                  <div className={styles.title}>Популярные трансляции</div>
                </div>
              )}
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
