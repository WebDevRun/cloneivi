import { FC } from 'react'

import { IPerson } from '@/types/Person'

import styles from './Person.module.scss'
import { PersonFilmography } from './PersonFilmography'
import { PersonHeader } from './PersonHeader'

export interface PersonProps {
  person: IPerson
  maxShowFilms: number
}

export const Person: FC<PersonProps> = ({ person, maxShowFilms }) => {
  return (
    <div className={styles.person}>
      <section>
        <PersonHeader {...person} />
      </section>
      <section>
        <PersonFilmography
          films={person.films}
          pathDataSrc={`${process.env.NEXT_PUBLIC_API_URL}/films/`}
          maxShowItems={maxShowFilms}
        />
      </section>
    </div>
  )
}
