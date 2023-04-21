import Link from 'next/link'

import anyDevIcon from '@/assets/images/install/anyDev_20__0.svg'
import appStoreIcon from '@/assets/images/install/app-store.svg'
import playStoreIcon from '@/assets/images/install/google-play.svg'
import smartTvIcon from '@/assets/images/install/smartTvPromo_20__0.svg'
import phoneIcon from '@/assets/images/social/call_16__0.svg'
import mailIcon from '@/assets/images/social/email_16__0.svg'
import linkedinIcon from '@/assets/images/social/linkedin.svg'
import okIcon from '@/assets/images/social/odnoklassniki.svg'
import telegramIcon from '@/assets/images/social/telegram.svg'
import twitterIcon from '@/assets/images/social/twitter.svg'
import viberIcon from '@/assets/images/social/viber.svg'
import vkIcon from '@/assets/images/social/vkontakte.svg'
import { FooterLink } from '@/ui/FooterLink'

import styles from './FooterDesktop.module.scss'

const FooterDesktop = () => {
  return (
    <>
      <hr className={styles.line} />
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <p className={styles.footerColumnTitle}>О нас</p>
          <ul className={styles.footerLinkList}>
            <li className={styles.footerLinkItem}>
              <Link href="#">О компании</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Вакансии</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Программа бета-тестирования</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Информация для партнёров</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Размещение рекламы</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Пользовательское соглашение</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Политика конфиденциальности</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Комплаенс</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <p className={styles.footerColumnTitle}>Разделы</p>
          <ul className={styles.footerLinkList}>
            <li className={styles.footerLinkItem}>
              <Link href="#">Мой Иви</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Что нового</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Фильмы</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Сериалы</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Мультфильмы</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">ТВ-каналы</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href="#">Что посмотреть</Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link className={styles.certificationLink} href="#">
                Активация сертификата
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <p className={styles.footerColumnTitle}>Служба поддержки</p>
          <div className={styles.footerColumnDescription}>
            <p>Мы всегда готовы вам помочь.</p>
            <p>Наши операторы онлайн 24/7</p>
          </div>
          <div className={styles.footerSupport}>
            <FooterLink href="/" type="square" text="Написать в чате" />
            <div className={styles.footerSupportButtons}>
              <FooterLink
                href="/"
                type="square"
                iconSrc={mailIcon}
                iconAlt="Mail"
              />
              <FooterLink
                href="/"
                type="square"
                iconSrc={phoneIcon}
                iconAlt="Phone"
              />
            </div>
            <div className={styles.footerQuestions}>
              <a href="#">ask.ivi.ru</a>
              <p>Ответы на вопросы</p>
            </div>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.footerWidget}>
            <div className={styles.footerWidgetIcon}></div>
            <div className={styles.footerWidgetText}>
              Смотрите фильмы, сериалы и мультфильмы без рекламы
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.footerContentBottom}>
        <div className={styles.footerColumn}>
          <div className={styles.footerStores}>
            <FooterLink
              href="/"
              type="square"
              iconSrc={appStoreIcon}
              iconAlt="App Store"
              text="App Store"
              subText="Загрузить в"
            />
            <FooterLink
              href="/"
              type="square"
              iconSrc={playStoreIcon}
              iconAlt="Play Store"
              text="Google Play"
              subText="Доступно в"
            />
            <FooterLink
              href="/"
              type="square"
              iconSrc={smartTvIcon}
              iconAlt="Smart Tv"
              text="Smart Tv"
              subText="Смотрите на"
            />
            <FooterLink
              href="/"
              type="square"
              iconSrc={anyDevIcon}
              iconAlt="All Dev"
              text="Все Устройства"
            />
          </div>
          <div className={styles.footerCopyrights}>
            <p>© 2023 ООО «Иви.ру»</p>
            <p>
              HBO ® and related service marks are the property of Home Box
              Office, Inc
            </p>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.footerComunity}>
            <FooterLink href="/" type="circle" iconSrc={vkIcon} iconAlt="Ok" />
            <FooterLink href="/" type="circle" iconSrc={okIcon} iconAlt="Ok" />
            <FooterLink
              href="/"
              type="circle"
              iconSrc={twitterIcon}
              iconAlt="Ok"
            />
            <FooterLink
              href="/"
              type="circle"
              iconSrc={viberIcon}
              iconAlt="Ok"
            />
            <FooterLink
              href="/"
              type="circle"
              iconSrc={linkedinIcon}
              iconAlt="Ok"
            />
            <FooterLink
              href="/"
              type="circle"
              iconSrc={telegramIcon}
              iconAlt="Ok"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterDesktop
