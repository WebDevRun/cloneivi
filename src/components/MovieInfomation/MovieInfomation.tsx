import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { TextCollapse } from '../TextCollapse'

import { IPerson, Medallions } from './Medallions'
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
  assessments: number
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
  assessments,
}) => {
  const { t } = useTranslation()

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

      <div className={styles.medallions}>
        <Medallions rating={rating} persons={persons} />
      </div>

      <div className={styles.watchDescriptionContainer}>
        <TextCollapse
          maxChar={200}
          textForCollapse={`${t('CollapseDetails')}`}
          textForExpand={`${t('FilmDetails')}`}
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

      <MovieRating rating={rating} assessments={assessments} ></MovieRating>
    </div>
  )
}
