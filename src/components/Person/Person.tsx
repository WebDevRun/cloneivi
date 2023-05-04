import styles from './Person.module.scss'
import { PersonFilmography } from './PersonFilmography'
import { PersonHeader } from './PersonHeader'

export interface IFilmId {
  film_id: string
}

export interface IPerson {
  id: string
  first_name_ru: string
  last_name_ru: string
  first_name_en: string
  last_name_en: string
  img: string
  films: IFilmId[]
}

export const Person = (props: IPerson) => {
  return (
    <div className={styles.person}>
      <section>
        <PersonHeader {...props} />
      </section>
      <section>
        <PersonFilmography {...props} />
      </section>
      <section>
        <div className={styles.breadCrumbs}>
          Здесь будет компонент Хлебные крошки
        </div>
      </section>
    </div>
  )
}
