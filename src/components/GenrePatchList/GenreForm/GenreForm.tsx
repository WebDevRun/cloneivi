import { useTranslation } from 'next-i18next'
import { FC, useRef, useState } from 'react'

import { usePatchGenreMutation } from '@/store/endpoints/genres'
import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'

import styles from './GenreForm.module.scss'

export interface GenreFormProps {
  id: string
  initialRuText: string
  initialEnText: string
}

export const GenreForm: FC<GenreFormProps> = ({
  id,
  initialRuText,
  initialEnText,
}) => {
  const { t } = useTranslation(['adminPage'])
  const [ruText, setRuText] = useState(initialRuText)
  const [enText, setEnText] = useState(initialEnText)
  const ruTextRef = useRef(ruText)
  const enTextRef = useRef(enText)
  const [patchGenre] = usePatchGenreMutation()

  const saveClickHandler = async () => {
    await patchGenre({
      id,
      body: { genre_ru: ruText, genre_en: enText },
    }).unwrap()
  }

  const cancelCkickHandler = () => {
    setRuText(ruTextRef.current)
    setEnText(enTextRef.current)
  }

  return (
    <form className={styles.genreForm}>
      <Input description='Ru:' text={ruText} setText={setRuText} type='text' />
      <Input description='En:' text={enText} setText={setEnText} type='text' />
      <Button
        disabled={ruText === initialRuText && enText === initialEnText}
        text={`${t('adminPage:save')}`}
        size='small'
        background='gray'
        onClick={saveClickHandler}
      />
      <Button
        disabled={ruText === initialRuText && enText === initialEnText}
        text={`${t('adminPage:cancel')}`}
        size='small'
        background='gray'
        onClick={cancelCkickHandler}
      />
    </form>
  )
}
