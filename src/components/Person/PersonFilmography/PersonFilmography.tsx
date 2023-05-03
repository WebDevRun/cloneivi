import { FC } from 'react'

import { Button } from '@/ui/Button'

import { PersonFilmographyItem } from '../PersonFilmographyItem'

import styles from './PersonFilmography.module.scss'

export interface PersonFilmographyProps {}

export const PersonFilmography: FC<PersonFilmographyProps> = () => {
  return (
    <div className={styles.personFilmography}>
      <div className={styles.header}>
        <div className={styles.title}>Полная фильмография</div>
        <div className={styles.extraTitle}>47 фильмов</div>
      </div>

      <div className={styles.list}>
        <PersonFilmographyItem></PersonFilmographyItem>
      </div>

      <div className={styles.more}>
        <Button text='Ещё 39 фильмов' background='transparent' />
      </div>
    </div>
  )
}
