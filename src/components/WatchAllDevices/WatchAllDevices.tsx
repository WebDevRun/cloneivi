import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import ipadWithoutPoster from '@assets/images/devices/ipad-without-poster.png'
import tvWithoutPoster from '@assets/images/devices/tv-without-poster.png'

import styles from './WatchAllDevices.module.scss'

export interface WatchAllDevicesProps {
  name: string
  poster: string
}

export const WatchAllDevices: FC<WatchAllDevicesProps> = ({ name, poster }) => {
  return (
    <div className={styles.watchAllDevices}>
      <div>
        <h2 className={styles.title}>Cмотреть «{name}» на всех устройствах</h2>
        <p className={styles.subTitle}>
          Приложение доступно для скачивания на iOS, Android, SmartTV и
          приставках
        </p>
        <Link className={styles.link} href='https://www.ivi.ru/devices'>
          Подключить устройства
        </Link>
      </div>
      <div className={styles.images}>
        <Image
          className={styles.tvWithoutPoster}
          src={tvWithoutPoster}
          alt='Устройства для просмотра'
          placeholder='empty'
          priority={true}
        />
        <Image
          className={styles.ipadWithoutPoster}
          src={ipadWithoutPoster}
          alt='Устройства для просмотра'
          placeholder='empty'
          priority={true}
        />
        <div className={styles.tvPosterContainer}>
          <Image
            src={poster}
            alt={`Постер ${name}`}
            fill
            sizes='100%'
            priority={true}
          />
        </div>
        <div className={styles.ipadPosterContainer}>
          <Image
            src={poster}
            alt={`Постер ${name}`}
            fill
            sizes='100%'
            priority={true}
          />
        </div>
      </div>
    </div>
  )
}
