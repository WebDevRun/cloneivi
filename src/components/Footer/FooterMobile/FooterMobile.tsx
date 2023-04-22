import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

import Svg from '@/assets/svg/Svg'

import styles from './FooterMobile.module.scss'


export const FooterMobile = () => {
  const [activeButton, setActiveButton] = useState<string | null>('btn1')

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }
  return (
    <>
      <div className={styles.tabBar}>
        <Link
          onClick={() => handleClick('btn1')}
          className={cn(styles.tabBarItem, {
            [styles.active]: activeButton === 'btn1',
          })}
          href={'/'}
        >
          <div className={styles.light}></div>
          <div className={styles.tabBarIcon}>
            <Svg
              icon="HomeIcon"
              fill={activeButton === 'btn1' ? 'white' : 'gray'}
            />
          </div>
          <p className={styles.tabBarText}>Мой Иви</p>
        </Link>
        <Link
          onClick={() => handleClick('btn2')}
          className={cn(styles.tabBarItem, {
            [styles.active]: activeButton === 'btn2',
          })}
          href={'/'}
        >
          <div className={styles.light}></div>
          <div className={styles.tabBarIcon}>
            <Svg
              icon="CatalogIcon"
              fill={activeButton === 'btn2' ? 'white' : 'gray'}
            />
          </div>
          <p className={styles.tabBarText}>Мой Иви</p>
        </Link>
        <Link
          onClick={() => handleClick('btn3')}
          className={cn(styles.tabBarItem, {
            [styles.active]: activeButton === 'btn3',
          })}
          href={'/'}
        >
          <div className={styles.light}></div>
          <div className={styles.tabBarIcon}>
            <Svg
              icon="SearchIcon"
              fill={activeButton === 'btn3' ? 'white' : 'gray'}
            />
          </div>
          <p className={styles.tabBarText}>Мой Иви</p>
        </Link>
        <Link
          onClick={() => handleClick('btn4')}
          className={cn(styles.tabBarItem, {
            [styles.active]: activeButton === 'btn4',
          })}
          href={'/'}
        >
          <div className={styles.light}></div>
          <div className={styles.tabBarIcon}>
            <Svg
              icon="AvatarIcon"
              fill={activeButton === 'btn4' ? 'white' : 'gray'}
            />
          </div>
          <p className={styles.tabBarText}>Мой Иви</p>
        </Link>
        <Link
          onClick={() => handleClick('btn5')}
          className={cn(styles.tabBarItem, {
            [styles.active]: activeButton === 'btn5',
          })}
          href={'/'}
        >
          <div className={styles.light}></div>
          <div className={styles.tabBarIcon}>
            <Svg
              icon="MoreIcon"
              fill={activeButton === 'btn5' ? 'white' : 'gray'}
            />
          </div>
          <p className={styles.tabBarText}>Мой Иви</p>
        </Link>
      </div>
    </>
  )
}