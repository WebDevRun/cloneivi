import { useTranslation } from 'next-i18next'
import { FC, useState } from 'react'

import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'

import styles from './GenreForm.module.scss'

export interface GenreFormProps {
  initialRuText: string
  initialEnText: string
}

export const GenreForm: FC<GenreFormProps> = ({
  initialRuText,
  initialEnText,
}) => {
  const { t } = useTranslation(['adminPage'])
  const [ruText, setRuText] = useState(initialRuText)
  const [enText, setEnText] = useState(initialEnText)

  return (
    <form className={styles.genreForm}>
      <Input description='Ru' text={ruText} setText={setRuText} />
      <Input description='En' text={enText} setText={setEnText} />
      <Button
        disabled={ruText === initialRuText && enText === initialEnText}
        text={`${t('adminPage:save')}`}
        size='small'
        background='gray'
      />
      <Button
        disabled={ruText === initialRuText && enText === initialEnText}
        text={`${t('adminPage:cancel')}`}
        size='small'
        background='gray'
      />
    </form>
  )
}
