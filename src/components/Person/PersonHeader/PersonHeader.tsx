import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { declOfNum } from '@/utils/functions/declinOfNum'
import { getProportionalImgWidth } from '@/utils/functions/getProportionalImgWidth'
import { isSvg } from '@/utils/functions/isSvg'

import { IPerson } from '../../../types/person'

import styles from './PersonHeader.module.scss'

export const PersonHeader: FC<IPerson> = ({
  first_name_ru,
  last_name_ru,
  first_name_en,
  last_name_en,
  films,
  img = 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/09a6ecb6-052b-41fb-8323-1b95a10cb33a/280x420',
}) => {
  const { t } = useTranslation()
  const { locale } = useRouter()

  const filmsNumber = films?.length as number

  const words = [t('common:films'), t('filmsA'), t('filmsOV'), t('common:film')]

  const declination = declOfNum(filmsNumber, words)

  return (
    <div className={styles.personHeader}>
      <div className={styles.figure}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={img.indexOf('https://') === -1 ? `https:${img}` : img}
            alt={''}
            width={isSvg(img) ? 120 : getProportionalImgWidth(img, 120, 180)}
            height='180'
          />
        </div>
      </div>
      <h1 className={styles.title}>{`${
        locale === 'ru' ? first_name_ru : first_name_en
      } ${locale === 'ru' ? last_name_ru : last_name_en}`}</h1>
      <div
        className={styles.alternate}
      >{`${first_name_en} ${last_name_en}`}</div>
      <div className={styles.anchorLink}>
        <a href='#filmography'>{`${filmsNumber} ${declination}`}</a>
      </div>
    </div>
  )
}
