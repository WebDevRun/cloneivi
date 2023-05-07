import { FC, useEffect, useState } from 'react'

import defaultData from './data_mock.json'
import styles from './Person.module.scss'
import { PersonFilmography } from './PersonFilmography'
import { PersonHeader } from './PersonHeader'

export interface IFilmId {
  film_id: string
}

export interface IPerson {
  person_id: string
  first_name_ru: string
  last_name_ru: string
  first_name_en: string
  last_name_en: string
  img: string
  films: IFilmId[]
}

export interface PersonProps {
  person_id: string
  pathDataSrc: string
  maxShowFilms: number
}

export const Person: FC<PersonProps> = ({
  person_id,
  pathDataSrc,
  maxShowFilms,
}) => {
  const [person, setPerson] = useState(defaultData as IPerson)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${pathDataSrc}${person_id}`)
      const data = await response.json()
      setPerson(data)
    }
    fetchData()
  }, [person_id, pathDataSrc])

  return (
    <div className={styles.person}>
      <section>
        <PersonHeader {...person} />
      </section>
      <section>
        <PersonFilmography
          films={person.films}
          pathDataSrc='http://localhost:4000/films/'
          maxShowItems={maxShowFilms}
        />
      </section>
    </div>
  )
}
