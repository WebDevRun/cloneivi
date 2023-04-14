import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Logo from '@/ui/Logo'

export interface HomeProps {}

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <Logo />
      <h1>{t('header:example')}</h1>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['header'])),
    },
  }
}
