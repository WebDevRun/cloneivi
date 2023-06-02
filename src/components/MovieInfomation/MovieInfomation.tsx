import { useTranslation } from 'next-i18next'
import { FC, MouseEventHandler, useState } from 'react'

import { Button } from '@/ui/Button'

import { MovieDescription } from './MovieDescription'
import styles from './MovieInfomation.module.scss'
import { MovieParams } from './MovieParams'
import { MovieRating } from './MovieRating'

export interface MovieInfomationProps {
  title: string
  productionYear: number
  season?: string
  duration: number
  ageRating: string
  countries: string[]
  genres: string[]
  qualities: string[]
  description: string
  languagesAudio: string[]
  rating: number
}

const movieInfomationStatus = {
  open: 'Детали о фильме',
  close: 'Свернуть детали',
}

export const MovieInfomation: FC<MovieInfomationProps> = ({
  title,
  productionYear,
  duration,
  ageRating,
  countries,
  genres,
  qualities,
  description,
  languagesAudio,
  rating,
}) => {
  const [isClose, setIsClose] = useState(true)
  const { t } = useTranslation(['common'])

  const clickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsClose((prev) => !prev)
  }

  return (
    <div className={styles.movieInfomation}>
      <h1 className={styles.title}>{title}</h1>

      <MovieParams
        productionYear={productionYear}
        duration={duration}
        ageRating={ageRating}
        countries={countries}
        genres={genres}
        quality={qualities[0]}
      />

      <div className={styles.watchDescriptionContainer}>
        <MovieDescription
          isClose={isClose}
          description={description}
          languagesAudio={languagesAudio}
          qualities={qualities}
        />

        <Button
          background='transparent'
          fields='noneFields'
          text={
            isClose
              ? `${t('common:filmDetails')}`
              : `${t('common:collapseDetails')}`
          }
          onClick={clickHandler}
        />
      </div>

      <MovieRating rating={rating}></MovieRating>
    </div>
  )
}
