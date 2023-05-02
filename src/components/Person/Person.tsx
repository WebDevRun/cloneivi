import { FC } from 'react'

import styles from './Person.module.scss'
import { PersonFilmography } from './PersonFilmography'
import { PersonHeader } from './PersonHeader'
import Link from 'next/link'

export interface PersonProps {}

export const Person: FC<PersonProps> = () => {
  return (
    <div className={styles.actor}>
      <section>
        <PersonHeader />
        <div className='personAnchorLink person__personAnchorLink'>
          <a href='#filmography' className='personAnchorLink__link'>
            47 фильмов
          </a>
        </div>
      </section>
      <section>
        <PersonFilmography />
      </section>
      <section>
        <div className='person__breadCrumbs'>
          Здесь будет компонент Хлебные крошки
        </div>
      </section>
    </div>
  )
}
