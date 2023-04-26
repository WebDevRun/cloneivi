import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '@components/Header'
import { AppLayout } from '@layouts/AppLayout'
import { FilterSelector } from '@components/../ui/FilterSelector'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <Header />
        <h1>{t('header:more')}</h1>
        <FilterSelector name={'Жанры'} selectedItems={[]} setSelectedItems={() => []} position={'left'}/>
      </AppLayout>
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
