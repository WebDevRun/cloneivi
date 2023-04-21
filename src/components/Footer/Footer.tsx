import cn from 'classnames'
import Link from 'next/link'
import { FC, useState } from 'react'

import Svg from '@/assets/svg/Svg'

import styles from './Footer.module.scss'
import FooterDesktop from './FooterDesktop/FooterDesktop'
import FooterMobile from './FooterMobile/FooterMobile'

export const Footer: FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <FooterDesktop />
      </footer>
      <footer className={styles.mobileFooter}>
        <FooterMobile />
      </footer>
    </>
  )
}
