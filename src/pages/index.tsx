import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { AppLayout } from '@layouts/AppLayout'
import { Slider } from '@components/Slider'
import { SliderButton } from '@ui/SliderButton/SliderButton'
import { GenresSvg } from '@assets/svg/GenresSvg/GenresSvg'
import { GENRES_ICONS } from '@/utils/consts/genres'

export default function Home() {
  const { t } = useTranslation( ['header'] )

  return (
    <main>
      <AppLayout>
        <h1>{t( 'header:more' )}</h1>
        <Slider Component={SliderButton} items={GENRES_ICONS} onItemClick={console.log}
                componentSetting={{ type: 'square', style: 'fill', IconComponent: GenresSvg }} />
        <Slider Component={SliderButton} items={GENRES_ICONS} onItemClick={console.log} arrowSize={'small'}
                componentSetting={{ type: 'square', style: 'outline', IconComponent: GenresSvg }} />
        <Slider Component={SliderButton} items={GENRES_ICONS} onItemClick={console.log} arrowSize={'small'}
                componentSetting={{ type: 'circle', style: 'fill', IconComponent: GenresSvg }} />
        <Slider Component={SliderButton} items={GENRES_ICONS} onItemClick={console.log} arrowSize={'small'}
                componentSetting={{ type: 'circle', style: 'active', IconComponent: GenresSvg }} />
        <Slider Component={SliderButton} items={GENRES_ICONS} onItemClick={console.log} arrowSize={'small'}
                componentSetting={{ type: 'circle', style: 'outline', IconComponent: GenresSvg }} />
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
