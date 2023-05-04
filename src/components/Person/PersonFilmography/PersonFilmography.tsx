import { FC } from 'react'

import { Button } from '@/ui/Button'

import { IPerson } from '../Person'
import { PersonFilmographyItem } from '../PersonFilmographyItem'

import styles from './PersonFilmography.module.scss'

export const PersonFilmography: FC<IPerson> = ({ films }) => {
  const filmsNumber = films?.length as number

  return (
    <div className={styles.personFilmography}>
      <div className={styles.header}>
        <div className={styles.title}>Полная фильмография</div>
        <div className={styles.extraTitle}>{`${filmsNumber} фильмов`}</div>
      </div>

      <div className={styles.list}>
        {films && films.map((film) => (
          <PersonFilmographyItem key={film.film_id} id={film.film_id} />
        ))}
        
      </div>

      <div className={styles.more}>
        <Button
          text={`Ещё ${filmsNumber - 8} фильмов`}
          background='transparent'
        />
      </div>
    </div>
  )
}
