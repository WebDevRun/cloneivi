import Image from 'next/image'
import { FC } from 'react'

import { declOfNum } from '@/utils/functions/declinOfNum'
import { getProportionalImgWidth } from '@/utils/functions/getProportionalImgWidth'

import { IPerson } from '../../../types/Person'

import styles from './PersonHeader.module.scss'

export const PersonHeader: FC<IPerson> = ({
  first_name_ru,
  last_name_ru,
  first_name_en,
  last_name_en,
  films,
  img = '//avatars.mds.yandex.net/get-kinopoisk-image/1599028/09a6ecb6-052b-41fb-8323-1b95a10cb33a/280x420',
}) => {
  const filmsNumber = films?.length as number

  const declination = declOfNum(filmsNumber, ['фильм', 'фильма', 'фильмов'])
  const isSvg =
    img.split('/').at(-1)?.split('.').at(-1) === 'svg' ? true : false

  return (
    <div className={styles.personHeader}>
      <div className={styles.figure}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={img.indexOf('https://') === -1 ? `https:${img}` : img}
            alt={''}
            width={isSvg ? 120 : getProportionalImgWidth(img, 120, 180)}
            height='180'
          />
        </div>
      </div>
      <h1 className={styles.title}>{`${first_name_ru} ${last_name_ru}`}</h1>
      <div
        className={styles.alternate}
      >{`${first_name_en} ${last_name_en}`}</div>
      <div className={styles.anchorLink}>
        <a href='#filmography'>{`${filmsNumber} ${declination}`}</a>
      </div>
    </div>
  )
}
