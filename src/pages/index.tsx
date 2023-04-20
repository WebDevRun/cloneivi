import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Slider } from '@components/Slider'
import { AppLayout } from '@layouts/AppLayout'

export default function Home() {
  const { t } = useTranslation( ['header'] )

  return (
    <main>
      <AppLayout>
        <h1>{t( 'header:more' )}</h1>
        {/*<Slider Component={SliderButton} items={arr} onItemClick={console.log}*/}
        {/*        componentSetting={{ type: 'square', style: 'outlined' }} />*/}
      </AppLayout>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations( locale ?? 'ru', ['header'] )
  return {
    props: {
      ...localeData,
    },
  }
}
