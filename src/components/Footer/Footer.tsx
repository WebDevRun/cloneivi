import { FC } from 'react'

import styles from './Footer.module.scss'
import { FooterDesktop } from './FooterDesktop/FooterDesktop'
import { FooterMobile } from './FooterMobile/FooterMobile'

export const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <FooterDesktop />
      </div>
      <div className={styles.mobileFooter}>
        <FooterMobile />
      </div>
    </footer>
  )
}
