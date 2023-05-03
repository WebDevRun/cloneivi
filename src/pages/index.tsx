import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Fragment } from 'react'

import { Header } from '@/components/Header'
import { HeaderDropdown } from '@/components/HeaderDropdown/HeaderDropdown'
import { DropDownLayout } from '@/layouts/DropDownLayout'
import { AppLayout } from '@layouts/AppLayout'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <Fragment>
      <header>
        <AppLayout>
          <Header />
          <DropDownLayout position='center' size='small' type='header'>
            <HeaderDropdown />
          </DropDownLayout>
        </AppLayout>
      </header>
      <main>
        <AppLayout>
          <h1>{t('header:more')}</h1>
        </AppLayout>
      </main>
    </Fragment>
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
