import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout } from '@/layout/Layout'
import Logo from '@/ui/Logo'

const Home = () => {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <Logo />
      <h1>{t('header:example')}</h1>
      <Layout>
        <Logo />
        <h1>Clone IVI</h1>
      </Layout>
    </main>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['header'])),
    },
  }
}
