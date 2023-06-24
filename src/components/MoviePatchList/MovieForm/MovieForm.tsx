import { useTranslation } from 'next-i18next'
import { FC, FormEventHandler, useState } from 'react'

import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'

import styles from './MovieForm.module.scss'

interface MovieFormProps {
  setData: (str: string) => void
}

export const MovieForm: FC<MovieFormProps> = ({ setData }) => {
  const { t } = useTranslation(['adminPage'])
  const [searchText, setSearchText] = useState('')

  const submitHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setData(searchText)
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
