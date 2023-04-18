import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { AppLayout } from '@layouts/AppLayout'
import { Slider } from '@components/Slider'
import { GenresButton } from '@ui/GenresButton'

export default function Home() {
  const { t } = useTranslation(['header'])

  const arr = [
    { id: 0, name: 'asdsad' },
    { id: 1, name: 'asdsad' },
    { id: 2, name: 'asdsad' },
    { id: 3, name: 'asdsad' },
    { id: 4, name: 'asdsad' },
    { id: 5, name: 'asdsad' },
    { id: 6, name: 'asdsad' },
    { id: 7, name: 'asdsad' },
    { id: 8, name: 'asdsad' },
    { id: 9, name: 'asdsad' },
    { id: 10, name: 'asdsad' },
    { id: 11, name: 'asdsad' },
    { id: 12, name: 'asdsad' },
    { id: 13, name: 'asdsad' },
    { id: 14, name: 'asdsad' },
    { id: 15, name: 'asdsad' },
    { id: 16, name: 'asdsad' },
  ]

  return (
    <main>
      <AppLayout>
        <h1>{t('header:more')}</h1>
        <Slider Component={GenresButton} items={arr} onItemClick={() => 'fh'}/>
      </AppLayout>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', ['header'])
  return {
    props: {
      ...localeData
    }
  }
}
