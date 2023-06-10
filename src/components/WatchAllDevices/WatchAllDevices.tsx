import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { LinkBtn } from '@/ui/LinkBtn'
import ipadWithoutPoster from '@assets/images/devices/ipad-without-poster.png'
import tvWithoutPoster from '@assets/images/devices/tv-without-poster.png'

import styles from './WatchAllDevices.module.scss'

export interface WatchAllDevicesProps {
  name: string
  poster: string
}

export const WatchAllDevices: FC<WatchAllDevicesProps> = ({ name, poster }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.watchAllDevices}>
      <div>
        <h2 className={styles.title}>
          {t('watchOnAllDevices', { name })}
        </h2>
        <p className={styles.subTitle}>{t('appAvailable')}</p>
        <LinkBtn
          background='red'
          href='https://www.ivi.ru/devices'
          mode='footer'
          text={`${t('connectDevices')}`}
          type='square'
        />
      </div>
      <div className={styles.images}>
        <Image
          className={styles.tvWithoutPoster}
          width={536}
          height={272}
          src={tvWithoutPoster}
          alt={t('viewingDevices')}
          priority
          placeholder='empty'
        />
        <Image
          className={styles.ipadWithoutPoster}
          src={ipadWithoutPoster}
          alt={t('viewingDevices')}
          width={200}
          height={136}
          priority
          placeholder='empty'
        />
        <Image
          className={styles.tvPoster}
          src={poster}
          alt={name}
          width={337}
          height={192}
          priority
          placeholder='empty'
        />
        <Image
          className={styles.ipadPoster}
          src={poster}
          alt={name}
          width={188}
          height={102}
          priority
          placeholder='empty'
        />
      </div>
    </div>
  )
}
