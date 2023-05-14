import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { SubscriptionWidget } from '@/components/SubscriptionWidget'
import { Header } from '@components/Header'
import { AppLayout } from '@layouts/AppLayout'

import posters from './../components/SubscriptionWidget/posters.json'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <h1>{t('header:more')}</h1>
        <Header />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <SubscriptionWidget
            posters={posters.subscription}
            size='big'
            textButton='Другие подписки'
          />

          <SubscriptionWidget
            posters={posters.movies}
            note='Отключить можно в любой момент'
            text='От 199 ₽ за месяц'
            textButton='Смотреть на SmartTV'
            title='Подписка Иви'
          />
        </div>
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
