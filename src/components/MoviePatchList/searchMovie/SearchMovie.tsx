import { useTranslation } from 'next-i18next'
import { ChangeEventHandler, FC } from 'react'

import styles from './SearchMovie.module.scss'

export interface SearchMovieProps {
  text: string
  setText: (str: string) => void
}

export const SearchMovie: FC<SearchMovieProps> = ({ text, setText }) => {
  const { t } = useTranslation(['adminPage'])
  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value)
  }

  return (
    <label className={styles.searchMovie}>
      <span className={styles.description}>{t('adminPage:findMovie')}</span>
      <input
        className={styles.input}
        type='text'
        value={text}
        onChange={inputChangeHandler}
        placeholder={`${t('adminPage:find')}...`}
      />
    </label>
  )
}
