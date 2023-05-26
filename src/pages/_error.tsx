import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { AppLayout } from '@layouts/AppLayout'

import { Flex, H1, Text } from '../ui/ui'

import styles from './pages.module.scss'

type ErrorProps = {
  errorCode: number
}

export default function ErrorPage({ errorCode }: ErrorProps) {
  const { t } = useTranslation()

  return (
    <AppLayout>
      <Flex variant='center' className={styles.pageNotFound}>
        <Flex variant='column'>
          <H1>{t('Error')}</H1>
          {errorCode === 404 && <Text>{t('PageNotFound')}</Text>}
          {errorCode !== 404 && <Text>{errorCode}</Text>}
        </Flex>
      </Flex>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  res,
}) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', [
    'header',
    'common',
  ])

  const errorCode = res?.statusCode || 404

  return {
    props: { errorCode, ...localeData },
  }
}
