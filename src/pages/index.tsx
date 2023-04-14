import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Logo from '@/ui/Logo'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <Logo />
      <h1>{t('header:example')}</h1>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['header'])),
    },
  }
}
