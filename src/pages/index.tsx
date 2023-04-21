import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { AppLayout } from '@layouts/AppLayout'
import { Slider } from '@components/Slider'
import { SliderButton } from '@ui/SliderButton/SliderButton'
import { GENRES_ICONS } from '@/utils/consts/genres'

const Home = () => {
  const {t} = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <h1>{t('header:more')}</h1>
        <Slider Component={SliderButton} items={GENRES_ICONS} arrowSize={'big'} type={'list'} onItemClick={() => ''}
                componentSetting={{type: 'square', style: 'fill'}} />
      </AppLayout>
    </main>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', ['header'])
  return {
    props: {
      ...localeData,
    },
  }
}
