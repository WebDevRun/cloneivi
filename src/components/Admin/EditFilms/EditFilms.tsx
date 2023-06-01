import { useTranslation } from 'next-i18next'
import { FC, useEffect, useState } from 'react'
import { FormEvent } from 'react'

import { IMovie, IMovieName } from '@/types/movie'
import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'

import { Text } from '../../../ui/ui'
import { changeFilmName } from '../../../utils/functions/crud'

import styles from './EditFilms.module.scss'

export interface EditFilmsProps {
  film: IMovie
}

export const EditFilms: FC<EditFilmsProps> = ({ film }) => {
  const [isChange, setIsChange] = useState(false)
  const { t } = useTranslation()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as HTMLFormElement

    const data: IMovieName = {
      name_ru: target.movieTitleRu.value,
      name_en: target.movieTitleEn.value,
    }

    changeFilmName(film.film_id, data)
  }

  useEffect(() => {
    alert('slkdfksdflkdf')
  }, [film])

  return (
    <>
      <Text className={styles.title} variant='titleBg'>{`${t(
        'FilmEditing',
      )}`}</Text>

      <form className={styles.form} name='message' onSubmit={handleSubmit}>
        <Input
          label={`${t('MovieTitle')} Ru`}
          name='movieTitleRu'
          defaultValue={film.name_ru}
        />
        <Input
          label={`${t('MovieTitle')} En`}
          name='movieTitleEn'
          defaultValue={film.name_en}
        />

        <div className={styles.buttons}>
          <Button type='submit' text={`${t('Save')}`} />
          <Button type='reset' text={`${t('Reset')}`} />
        </div>
      </form>
    </>
  )
}
