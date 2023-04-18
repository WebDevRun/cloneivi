import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Slider } from '@components/Slider'
import { AppLayout } from '@layouts/AppLayout'
import { SliderButton } from '@ui/SliderButton'

import vk from '@assets/images/social/vkontakte.svg'

export default function Home() {
  const { t } = useTranslation(['header'])

  const arr = [
    { id: 0, text: 'Драмы', iconSrc: vk, iconAlt: 'Драмы' },
    { id: 1, text: 'Комедии', iconSrc: vk, iconAlt: 'Комедии' },
    { id: 2, text: 'Боевики', iconSrc: vk, iconAlt: 'Боевики' },
    { id: 3, text: 'Триллеры', iconSrc: vk, iconAlt: 'Триллеры' },
    { id: 4, text: 'Приключения', iconSrc: vk, iconAlt: 'Приключения' },
    { id: 5, text: 'Зарубежные', iconSrc: vk, iconAlt: 'Зарубежные' },
    { id: 6, text: 'Мелодрамы', iconSrc: vk, iconAlt: 'Мелодрамы' },
    { id: 7, text: 'Фантастика', iconSrc: vk, iconAlt: 'Фантастика' },
    { id: 8, text: 'Фэнтези', iconSrc: vk, iconAlt: 'Фэнтези' },
    { id: 9, text: 'Семейные', iconSrc: vk, iconAlt: 'Семейные' },
    { id: 10, text: 'Детективы', iconSrc: vk, iconAlt: 'Детективы' },
    { id: 11, text: 'Ужасы', iconSrc: vk, iconAlt: 'Ужасы' },
    { id: 12, text: 'Советские', iconSrc: vk, iconAlt: 'Советские' },
    { id: 13, text: 'Русские', iconSrc: vk, iconAlt: 'Русские' },
    { id: 14, text: 'Исторически', iconSrc: vk, iconAlt: 'Исторически' },
    { id: 15, text: 'Для детей', iconSrc: vk, iconAlt: 'Для детей' },
    { id: 16, text: 'По комиксам', iconSrc: vk, iconAlt: 'По комиксам' },
    { id: 17, text: 'Катастрофы', iconSrc: vk, iconAlt: 'Катастрофы' },
    { id: 18, text: 'Артхаус', iconSrc: vk, iconAlt: 'Артхаус' },
    { id: 19, text: 'Мистические', iconSrc: vk, iconAlt: 'Мистические' },
    { id: 21, text: 'Криминал', iconSrc: vk, iconAlt: 'Криминал' },
    { id: 22, text: 'Спорт', iconSrc: vk, iconAlt: 'Спорт' },
    { id: 23, text: 'Биография', iconSrc: vk, iconAlt: 'Биография' },
    { id: 24, text: 'Вестерн', iconSrc: vk, iconAlt: 'Вестерн' },
    { id: 25, text: 'Музыкальные', iconSrc: vk, iconAlt: 'Музыкальные' },
  ]

  return (
    <main>
      <AppLayout>
        <h1>{t('header:more')}</h1>
        <Slider Component={SliderButton} items={arr} onItemClick={() => 'fh'}
                componentSetting={{ type: 'square', style: 'fill' }} />
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
