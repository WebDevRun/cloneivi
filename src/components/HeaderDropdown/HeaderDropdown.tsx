import cn from 'classnames'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { FC, useEffect, useState } from 'react'

import { Button } from '@/ui/Button'

import cartoons from '../cartoons.json'
import movies from '../movies.json'
import { NativeScroll } from '../NativeScroll'
import profile from '../profile.json'
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
  const [isNotify, setIsNotify] = useState(false)
  const [isProfile, setIsProfile] = useState(false)
  const [sideFit, setSideFit] = useState('')

  let mainCn = cn(styles[active])
  let sideCn = cn(styles.sideContent, styles[sideFit])

  function eventHandler(e: CustomEventInit<string>) {
    console.log(e.detail)
    setSideFit('')
    setIsTv(false)
    setIsNotify(false)
    setIsProfile(false)
    switch (e.detail) {
      case 'header-movies':
        setLists(movies)
        setActive('headerDropdownActive')
        break
      case 'header-serials':
        setLists(series)
        setActive('headerDropdownActive')
        break
      case 'header-animations':
        setLists(cartoons)
        setActive('headerDropdownActive')
        break
      case 'header-tv':
        setIsTv(true)
        setLists(tv)
        setActive('headerDropdownActive')
        setSideFit('sideContentFull')
        break
      case 'header-notify':
        setIsNotify(true)
        setActive('headerDropdownActive')
        break
      case 'header-profile':
        setIsProfile(true)
        setActive('headerDropdownActive')
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

            {!(isNotify || isProfile) && (
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
                {!(isNotify || isProfile) && (
                  <div className={styles.sideContentWidget}>
                    <SubscriptionWidget />
                  </div>
                )}
              </div>
            )}

            {isNotify && (
              <div className={styles.notifyWrap}>
                <div className={styles.notify}>
                  <div className={styles.notifyBell}>
                    <div className={styles.bell}>
                      <svg
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='56'
                        height='56'
                        viewBox='0 0 32 32'
                      >
                        <title>bell</title>
                        <path d='M18.667 4.889q0.444-0.889 0.444-2t-0.889-2-2.222-0.889-2.222 0.889-0.889 2 0.444 2q-2.222 0.444-4 1.556t-2.889 3.111-1.111 4.222v6.222q0 1.778-1.778 3.111-0.889 0.889-1.333 1.556t-0.444 1.778 0.667 1.778 2 0.667h23.111q1.333 0 2-0.667t0.667-1.778-0.444-1.778-1.333-1.556q-1.778-1.333-1.778-3.111v-6.222q0-2.222-1.111-4.222t-2.889-3.111-4-1.556zM16.444 6.222q1.333 0 2.667 0.444t2.667 1.333q3.111 2.222 3.111 5.778v6.222q0 2.667 2.667 4.889l0.889 0.444v1.778h-24.889v-1.778l0.889-0.444q2.667-2.222 2.667-4.889v-6.222q0-3.556 3.111-5.778 1.333-0.889 2.667-1.333t2.667-0.444h0.889zM16 4.444q-0.444 0-0.889-0.444t-0.444-0.889 0.444-0.889 0.889-0.444 0.889 0.444 0.444 0.889-0.444 0.889-0.889 0.444z'></path>
                      </svg>
                    </div>
                    <div className={styles.clink}>
                      <svg
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='56'
                        height='56'
                        viewBox='0 0 32 32'
                      >
                        <title>clink</title>
                        <path d='M11.111 28.444q0.444 1.333 2 2.444t3.333 1.111 3.333-0.889 2-2.667v-0.667t-0.444-0.444-0.667 0-0.667 0.889-1.333 1.333-2.222 0.667-2.222-0.667-1.333-1.556-0.667-0.889h-0.667t-0.444 0.444v0.889zM14.222 8q-2.222 0-4 1.778t-1.778 4q0 0.444 0.222 0.667t0.667 0.222 0.667-0.222 0.222-0.667q0-1.778 1.111-2.889t2.889-1.111q0.444 0 0.667-0.222t0.222-0.667-0.222-0.667-0.667-0.222zM8 2.222q-2.667 1.778-4.444 4.444t-1.778 6.222q0 0.444 0.222 0.667t0.667 0.222 0.667-0.222 0.222-0.667q0-2.667 1.333-5.111t4-3.778q0.444-0.444 0.444-0.667t-0.222-0.667-0.444-0.444h-0.667zM24 2.222h-0.667t-0.444 0.444-0.222 0.667 0.444 0.667q2.667 1.333 4 3.778t1.333 5.111q0 0.444 0.222 0.667t0.667 0.222 0.667-0.222 0.222-0.667q0-3.556-1.778-6.222t-4.444-4.444z'></path>
                      </svg>
                    </div>
                  </div>
                  <div className={styles.notifyText}>
                    Здесь появляются только важные сообщения
                  </div>
                </div>
              </div>
            )}
            {isProfile && (
              <div className={styles.profile}>
                <div className={styles.profileMain}>
                  {profile.items.map((item, index) => (
                    <div key={index}>
                      {/* -------------------------------- */}
                      <Link href={item.href}>
                        <div className={styles.profileItem}>
                          <div>{item.icon}</div>
                          <div className={styles.textBlock}>
                            <div>{item.title}</div>
                            <div>{item.extra}</div>
                          </div>
                        </div>
                      </Link>
                      {/* -------------------------------- */}
                    </div>
                  ))}
                </div>
                <div className={styles.profileSide}>
                  <Button text='Войти или зарегистрироваться'></Button>
                  <div className={styles.list}>
                    <div>
                      <Link href='https://www.ivi.ru/' title='Настройки'>
                        Настройки
                      </Link>
                    </div>
                    <div>
                      <Link href='https://www.ivi.ru/' title='Помощь'>
                        Помощь
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
