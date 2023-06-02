import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import ipadWithoutPoster from '@assets/images/devices/ipad-without-poster.png'
import tvWithoutPoster from '@assets/images/devices/tv-without-poster.png'

import styles from './WatchAllDevices.module.scss'

export interface WatchAllDevicesProps {
  name: string
  poster: string
}

export const WatchAllDevices: FC<WatchAllDevicesProps> = ({ name, poster }) => {
  const { t } = useTranslation(['moviePage'])

  return (
    <div className={styles.watchAllDevices}>
      <div>
        <h2 className={styles.title}>
          {t('moviePage:watchOnAllDevices', { name })}
        </h2>
        <p className={styles.subTitle}>{t('moviePage:appAvailable')}</p>
        <Link className={styles.link} href='https://www.ivi.ru/devices'>
          {t('moviePage:connectDevices')}
        </Link>
      </div>
      <div className={styles.images}>
        <Image
          className={styles.tvWithoutPoster}
          width={536}
          height={272}
          src={tvWithoutPoster}
          alt={t('moviePage:viewingDevices')}
          priority
          placeholder='empty'
        />
        <Image
          className={styles.ipadWithoutPoster}
          src={ipadWithoutPoster}
          alt={t('moviePage:viewingDevices')}
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
