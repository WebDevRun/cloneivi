import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { AppLayout } from '@layouts/AppLayout'

export default function Home() {
  const { t } = useTranslation(['common'])

  return (
    <AppLayout>
      <h1>{t('common:more')}</h1>
    </AppLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', ['common'])
  return {
    props: {
      ...localeData,
    },
  }
}
