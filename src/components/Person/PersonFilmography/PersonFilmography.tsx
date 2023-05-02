import { FC } from 'react'

import { Button } from '@/ui/Button'

import styles from './PersonFilmography.module.scss'

export interface PersonFilmographyProps {}

export const PersonFilmography: FC<PersonFilmographyProps> = () => {
  return (
    <div className={styles.personFilmography}>
      <div className='personFilmography__header'>
        <div className='personFilmography__title'>Полная фильмография</div>
        <div className='personFilmography__extraTitle'>47 фильмов</div>
      </div>

      <div className='personFilmography__list'>Список фильмов</div>
      <div className='personFilmography__more'>
        <Button
          text='Ещё 39 фильмов'
          background='transparent'
        />
      </div>
    </div>
  )
}
