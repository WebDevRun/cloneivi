import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Layout } from '@/layout/Layout'
import FooterButton from '@/ui/FooterButton/FooterButton'
import Logo from '@/ui/Logo'
import devicesIcon from './icons/devices-line.svg'
import mailIcon from './icons/mail.svg'
import Image from 'next/image'

export default function Home() {
  const { t } = useTranslation(['header'])

  return (
    <main>
      <Logo />
      <h1>Clone IVI</h1>
      <FooterButton
        subText='Загрузить в'
        text='Play Store'
        type='square'
        iconAlt='#'
        iconSrc={mailIcon}
      />

      <FooterButton
        subText='Загрузить в'
        text='Play Store'
        type='square'
        iconAlt='#'
        iconSrc='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg'
      />

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
