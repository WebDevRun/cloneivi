
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Layout } from '@/layout/Layout'
import Logo from '@/ui/Logo'
import { SelectorButton } from '@/ui/SelectorButton'
import { useState } from 'react'

const Home = () => {
  const { t } = useTranslation(['header'])
  const [active, setActive] = useState(false)

  return (
    <main>
      <Logo />
      <h1>{t('header:example')}</h1>
      <Layout>
        <Logo />
        <h1>Clone IVI</h1>
        <SelectorButton name={'adsf'} active={active} setActive={setActive} selectedItems={['sadfasdf', 'asdfasdf', 'asdfsafd']}/>
        <SelectorButton name={'adsf'} active={active} setActive={setActive} selectedItems={[]} disabled={true}/>
        <SelectorButton name={'adsf'} active={active} setActive={setActive} selectedItems={['Детектив', 'Артхаус', 'Мультфильм', 'Триллер', 'Военные']} disabled={false}/>
      </Layout>
    </main>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['header'])),
    },
  }
}
