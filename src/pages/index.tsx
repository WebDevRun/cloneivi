import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '@/components/Header'
import { HeaderDropdown } from '@/components/HeaderDropdown/HeaderDropdown'
import { DropDownLayout } from '@/layouts/DropDownLayout'
import { AppLayout } from '@layouts/AppLayout'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <DropDownLayout position="center" size="small" type="header">
          <HeaderDropdown />
        </DropDownLayout>
          <Header />
      </AppLayout>
      <h1>{t('header:more')}</h1>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', ['header'])
  return {
    props: {
      ...localeData,
    },
  }
}
