import Link from 'next/link'

import styles from './FooterDesktop.module.scss'

import { LinkBtn } from '@/ui/LinkBtn'
import { INameIcons, INameIconsExt } from '@/types/Icons'

export const FooterDesktop = () => {
  const footerSocailMedias = [
    {
      href: '/',
      icon: 'vkontakte',
      iconAlt: 'VK',
    },
    {
      href: '/',
      icon: 'odnoklassniki',
      iconAlt: 'OK',
    },
    {
      href: '/',
      icon: 'twitter',
      iconAlt: 'TW',
    },
    {
      href: '/',
      icon: 'viber',
      iconAlt: 'VB',
    },
    {
      href: '/',
      icon: 'linkedin',
      iconAlt: 'LD',
    },
    {
      href: '/',
      icon: 'telegram',
      iconAlt: 'TG',
    },
  ]
  const footerStores = [
    {
      href: '/',
      icon: 'appStore',
      text: 'App Store',
      subText: 'Загрузить в',
    },
    {
      href: '/',
      icon: 'googlePlay',
      text: 'Google Play',
      subText: 'Доступно в',
    },
    {
      href: '/',
      icon: 'smartTV',
      iconAlt: 'Smart Tv',
      text: 'Smart Tv',
      subText: 'Смотрите на',
    },
    {
      href: '/',
      icon: 'anyDev',
      iconAlt: 'All Dev',
      text: 'Все Устройства',
    },
  ]
  const footerLinks1 = [
    'О компании',
    'Вакансии',
    'Программа бета-тестирования',
    'Информация для партнёров',
    'Размещение рекламы',
    'Пользовательское соглашение',
    'Политика конфиденциальности',
    'Комплаенс',
  ]
  const footerLinks2 = [
    'Мой Иви',
    'Что нового',
    'Фильмы',
    'Сериалы',
    'Мультфильмы',
    'ТВ-каналы',
    'Что посмотреть',
  ]
  return (
    <>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <p className={styles.footerColumnTitle}>О нас</p>
          <ul className={styles.footerLinkList}>
            {footerLinks1.map((link, index) => (
              <li key={index} className={styles.footerLinkItem}>
                <Link href="#">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <p className={styles.footerColumnTitle}>Разделы</p>
          <ul className={styles.footerLinkList}>
            {footerLinks2.map((link, index) => (
              <li key={index} className={styles.footerLinkItem}>
                <Link href="#">{link}</Link>
              </li>
            ))}
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
            <LinkBtn href="/" type="square" text="Написать в чате" mode='footer' />
            <div className={styles.footerSupportButtons}>
              <LinkBtn
                href="/"
                type="square"
                mode='footer'
                icon='email'
                iconSize='small'
              />
              <LinkBtn
                href="/"
                type="square"
                mode='footer'
                icon='phone'
                iconSize='small'
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
      <div className={styles.footerContentBottom}>
        <div className={styles.footerColumn}>
          <div className={styles.footerStores}>
            {footerStores.map((store, index) => (
              <LinkBtn
                key={index}
                href={store.href}
                type="square"
                text={store.text}
                subText={store.subText}
                mode='footer'
                icon={store.icon as INameIcons | INameIconsExt}
              />
            ))}
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
            {footerSocailMedias.map((socialMedia, index) => (
              <LinkBtn
                key={index}
                href={socialMedia.href}
                type="circle"
                mode='footer'
                icon={socialMedia.icon as INameIcons | INameIconsExt}
                iconExt={true}
                iconSize='small'
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
