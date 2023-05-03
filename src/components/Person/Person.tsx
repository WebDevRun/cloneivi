import { FC } from 'react'

import styles from './Person.module.scss'
import { PersonFilmography } from './PersonFilmography'
import { PersonHeader } from './PersonHeader'

export interface PersonProps {}

export const Person: FC<PersonProps> = () => {
  return (
    <div className={styles.person}>
      <section>
        <PersonHeader />
      </section>
      <section>
        <PersonFilmography />
      </section>
      <section>
        <div className={styles.breadCrumbs}>
          Здесь будет компонент Хлебные крошки
        </div>
      </section>
    </div>
  )
}
