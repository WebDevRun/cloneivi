import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { AppLayout } from '@layouts/AppLayout'
import { Slider } from '@components/Slider'

export default function Home() {
  const { t } = useTranslation(['header'])

  const items = [
    {id: 0, name: 'a'},
    {id: 1, name: 'b'},
    {id: 2, name: 'c'},
    {id: 3, name: 'd'},
    {id: 4, name: 'e'},
    {id: 5, name: 'f'},
    {id: 6, name: 'g'},
    {id: 7, name: 'j'},
    {id: 8, name: 'j'},
    {id: 9, name: 'j'},
    {id: 10, name: 'j'},
    {id: 11, name: 'j'},
    {id: 12, name: 'j'},
    {id: 13, name: 'j'},
    {id: 14, name: 'j'},
    {id: 15, name: 'j'},
    {id: 16, name: 'j'},
    {id: 17, name: 'j'},
  ]

  return (
    <main>
      <AppLayout>
        <h1>{t('header:more')}</h1>
        <Slider component={<div style={{width: 100}}></div>}  items={items} onItemClick={() => console.log('asd')}/>
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
