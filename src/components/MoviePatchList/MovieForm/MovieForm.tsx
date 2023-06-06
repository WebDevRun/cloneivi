import { useTranslation } from 'next-i18next'
import { FC, FormEventHandler, useEffect, useState } from 'react'

import { useLazyGetFilmsByNameQuery } from '@/store/endpoints/films'
import { IMovie } from '@/types/movie'
import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'

import styles from './MovieForm.module.scss'

interface MovieFormProps {
  setData: (str: IMovie[] | undefined) => void
}

export const MovieForm: FC<MovieFormProps> = ({ setData }) => {
  const { t } = useTranslation(['adminPage'])
  const [searchText, setSearchText] = useState('')
  const [setName, result] = useLazyGetFilmsByNameQuery()

  useEffect(() => {
    if (result.data === undefined) return

    setData(result.data)
  }, [result.data, setData])

  const submitHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    await setName(searchText).unwrap()
  }

  return (
    <form className={styles.movieForm} onSubmit={submitHandler}>
      <Input
        type='search'
        description={`${t('adminPage:findMovie')}:`}
        text={searchText}
        setText={setSearchText}
        placeholder={`${t('adminPage:find')}...`}
      />
      <Button type='submit' size='small' text={`${t('adminPage:save')}`} />
    </form>
  )
}
