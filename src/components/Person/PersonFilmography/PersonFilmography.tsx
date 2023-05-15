import { FC, useState } from 'react'

import { IFilmId } from '@/types/Person'
import { Button } from '@/ui/Button'
import { declOfNum } from '@/utils/functions/declinOfNum'

import { PersonFilmographyItem } from '../PersonFilmographyItem'

import styles from './PersonFilmography.module.scss'

interface IPersonFilmography {
  films: IFilmId[]
  pathDataSrc: string
  maxShowItems: number
}

export const PersonFilmography: FC<IPersonFilmography> = ({
  films,
  pathDataSrc,
  maxShowItems,
}) => {
  const filmsNumber = films?.length as number

  const remainingQuantity = filmsNumber - maxShowItems

  const [showedItems, setShowedItems] = useState(maxShowItems)
  const [showButton, setShowButton] = useState(true)

  const words = ['фильм', 'фильма', 'фильмов']

  const declinationFilmsNumber = declOfNum(filmsNumber, words)

  const declinationRemainingQuantity = declOfNum(
    remainingQuantity as number,
    words,
  )

  function handleOnClick() {
    setShowedItems(filmsNumber)
    setShowButton(false)
  }

  return (
    <div id='filmography' className={styles.personFilmography}>
      <div className={styles.header}>
        <div className={styles.title}>Полная фильмография</div>
        <div
          className={styles.extraTitle}
        >{`${filmsNumber} ${declinationFilmsNumber}`}</div>
      </div>

      <div className={styles.list}>
        {films &&
          films.map(
            (film, index) =>
              index < showedItems && (
                <PersonFilmographyItem
                  key={film.film_id}
                  id={film.film_id}
                  pathDataSrc={pathDataSrc}
                />
              ),
          )}
      </div>

      {showButton && remainingQuantity > 0 && (
        <div className={styles.more}>
          <Button
            text={`Ещё ${remainingQuantity} ${declinationRemainingQuantity}`}
            background='transparent'
            onClick={handleOnClick}
            fields='noneFields'
          />
        </div>
      )}
    </div>
  )
}
