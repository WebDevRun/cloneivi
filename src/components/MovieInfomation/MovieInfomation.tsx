import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { TextCollapse } from '../TextCollapse'

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
  const { t } = useTranslation(['common'])

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
        <TextCollapse
          maxChar={200}
          textForCollapse={`${t('common:collapseDetails')}`}
          textForExpand={`${t('common:filmDetails')}`}
        >
          <MovieDescription
            isClose={false}
            description={description}
            languagesAudio={languagesAudio}
            qualities={qualities}
            persons={persons}
            rating={rating}
          />
        </TextCollapse>
      </div>

      <MovieRating rating={rating}></MovieRating>
    </div>
  )
}
