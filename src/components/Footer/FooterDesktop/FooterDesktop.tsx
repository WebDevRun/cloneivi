import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import styles from './FooterDesktop.module.scss'

import { INameIcons, INameIconsExt } from '@/types/Icons'
import { LinkBtn } from '@/ui/LinkBtn'

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
      subText: 'downloadTo',
    },
    {
      href: '/',
      icon: 'googlePlay',
      text: 'Google Play',
      subText: 'AvailableIn',
    },
    {
      href: '/',
      icon: 'smartTV',
      iconAlt: 'Smart Tv',
      text: 'Smart Tv',
      subText: 'watchAt',
    },
    {
      href: '/',
      icon: 'anyDev',
      iconAlt: 'All Dev',
      text: 'allDevices',
    },
  ]
  const footerLinks1 = [
    'aboutCompany',
    'jobs',
    'betaProgram',
    'partnersInformation',
    'advertisingPlacement',
    'termsOfUse',
    'privacyPolicy',
    'compliance',
  ]
  const footerLinks2 = [
    'myIvi',
    'whatsNew',
    'movies',
    'serials',
    'animations',
    'TVChannels',
    'whatSee',
  ]

  const { t } = useTranslation(['common'])

  return (
    <>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <p className={styles.footerColumnTitle}>{t('common:aboutUs')}</p>
          <ul className={styles.footerLinkList}>
            {footerLinks1.map((link, index) => (
              <li key={index} className={styles.footerLinkItem}>
                <Link href="#">{t(link)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <p className={styles.footerColumnTitle}>{t('sections')}</p>
          <ul className={styles.footerLinkList}>
            {footerLinks2.map((link, index) => (
              <li key={index} className={styles.footerLinkItem}>
                <Link href="#">{t(link)}</Link>
              </li>
            ))}
            <li className={styles.footerLinkItem}>
              <Link className={styles.certificationLink} href="#">
                {t('CertificateActivation')}
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <p className={styles.footerColumnTitle}>{t('support')}</p>
          <div className={styles.footerColumnDescription}>
            <p>{t('supportInfo')}</p>
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
              <p>{t('answersOnQuestions')}</p>
            </div>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.footerWidget}>
            <div className={styles.footerWidgetIcon}></div>
            <div className={styles.footerWidgetText}>
              {t('watchWithoutAdd')}
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
                text={t(store.text)}
                subText={t(store.subText as string)}
                mode='footer'
                icon={store.icon as INameIcons | INameIconsExt}
              />
            ))}
          </div>
          <div className={styles.footerCopyrights}>
            <p>{t('company')}</p>
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
