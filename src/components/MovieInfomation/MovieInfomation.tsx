import { useTranslation } from 'next-i18next'
import { FC, MouseEventHandler, useState } from 'react'

import { Button } from '@/ui/Button'

import { IPerson } from './Medallions'
import { MovieDescription } from './MovieDescription'
import styles from './MovieInfomation.module.scss'
import { MovieParams } from './MovieParams'
import { MovieRating } from './MovieRating'

export interface MovieInfomationProps {
  title: string
  productionYear: number
  duration: number
  ageRating: string
  countries: string[]
  genres: string[]
  qualities: string[]
  description: string
  languagesAudio: string[]
  rating: number
  persons: IPerson[]
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
  persons,
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
          persons={persons.slice(0, 4)}
          rating={rating}
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
