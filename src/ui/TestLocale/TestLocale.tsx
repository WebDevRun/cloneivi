import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import styles from './TestLocale.module.scss'

export interface TestLocaleProps {}

export const TestLocale: FC<TestLocaleProps> = () => {
  const { t } = useTranslation()

  return <div className={styles.testLocale}>{t('aboutUs')}</div>
}
