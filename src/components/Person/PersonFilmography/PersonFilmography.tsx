import { FC } from 'react'

import { Button } from '@/ui/Button'

import { IFilmId } from '../Person'
import { PersonFilmographyItem } from '../PersonFilmographyItem'

import styles from './PersonFilmography.module.scss'

interface IPersonFilmography {
  films: IFilmId[]
  pathDataSrc: string
}

export const PersonFilmography: FC<IPersonFilmography> = ({
  films,
  pathDataSrc,
}) => {
  const filmsNumber = films?.length as number


  return (
    <div className={styles.personFilmography}>
      <div className={styles.header}>
        <div className={styles.title}>Полная фильмография</div>
        <div className={styles.extraTitle}>{`${filmsNumber} фильмов`}</div>
      </div>

      <div className={styles.list}>
        {films &&
          films.map((film) => (
            <PersonFilmographyItem
              key={film.film_id}
              id={film.film_id}
              pathDataSrc={pathDataSrc}
            />
          ))}
      </div>

      <div className={styles.more}>
        <Button
          text={`Ещё ${filmsNumber - 8} фильм -а-ов`}
          background='transparent'
        />
      </div>
    </div>
  )
}
