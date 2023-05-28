import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { Button } from '@/ui/Button'
import noImage from '@assets/images/no_image.jpg'

import styles from './MovieItem.module.scss'

export interface MovieItemProps {
  name_ru: string
  name_en: string
  imgSrc: string
}

export const MovieItem: FC<MovieItemProps> = ({ imgSrc, name_en, name_ru }) => {
  const router = useRouter()
  const { t } = useTranslation(['adminPage'])

  return (
    <div className={styles.movieItem}>
      <Image
        width={50}
        height={80}
        src={imgSrc || noImage}
        alt={`poster ${router.locale === 'en' ? name_en : name_ru}`}
        priority
      />

      <div className={styles.names}>
        {name_ru && (
          <p>
            <span>Ru: </span>
            {name_ru}
          </p>
        )}
        {name_en && (
          <p>
            <span>En: </span>
            {name_en}
          </p>
        )}
      </div>

      <div className={styles.controls}>
        <Button
          size='small'
          background='gray'
          text={`${t('adminPage:edit')}`}
        />
        <Button
          size='small'
          background='gray'
          text={`${t('adminPage:delete')}`}
        />
      </div>
    </div>
  )
}
