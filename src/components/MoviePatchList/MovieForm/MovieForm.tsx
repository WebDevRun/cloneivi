import { useTranslation } from 'next-i18next'
import { FC, FormEvent, FormEventHandler, useState } from 'react'

import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'

import styles from './MovieForm.module.scss'

interface MovieFormProps {
  setData: (str: string) => void
}

export const MovieForm: FC<MovieFormProps> = ({ setData }) => {
  const { t } = useTranslation()

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    setData(target.findMovie.value)
  }

  return (
    <form className={styles.movieForm} onSubmit={submitHandler}>
      <Input type='search' label={`${t('findMovie')}:`} name='findMovie' />
      <Button type='submit' size='small' text={`${t('search')}`} />
    </form>
  )
}
