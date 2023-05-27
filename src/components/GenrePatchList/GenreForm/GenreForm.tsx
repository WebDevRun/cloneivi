import { useTranslation } from 'next-i18next'
import { ChangeEventHandler, FC, useState } from 'react'

import { Input } from '../Input'

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

  const inputRuChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setRuText(event.target.value)
  }

  const inputEnChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEnText(event.target.value)
  }

  return (
    <form className={styles.genreForm}>
      <Input description='Ru' text={ruText} setText={inputRuChangeHandler} />
      <Input description='En' text={enText} setText={inputEnChangeHandler} />
      <button
        className={styles.saveButton}
        disabled={ruText === initialRuText && enText === initialEnText}
      >
        {t('adminPage:save')}
      </button>
      <button
        className={styles.cancelButton}
        disabled={ruText === initialRuText && enText === initialEnText}
      >
        {t('adminPage:cancel')}
      </button>
    </form>
  )
}
