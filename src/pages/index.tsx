
import { Button } from '@/components/Button/Button'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Layout } from '@/layout/Layout'
import Logo from '@/ui/Logo'
import user from '../components/Button/user.svg'
import logout from '../components/Button/logout.svg'
import playArrow from '../components/Button/play_arrow.svg'
import search from '../components/Button/search.svg'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <Logo />
      <h1>{t('header:example')}</h1>
      <Layout>
        <Logo />
        <h1>Clone IVI</h1>
        <Button mode="primary" text="Оплатить подписку"></Button>
        <Button iconSrc={logout} iconAlt = 'logout' mode="trailer" text="Оплатить подписку"></Button>
        <Button iconSrc={user} iconAlt = 'sign_in' mode="sign_in"></Button>
        <Button iconSrc={search} iconAlt = 'search' mode="trailer" text="Поиск"></Button>
      </Layout>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['header'])),
    },
  }
}
