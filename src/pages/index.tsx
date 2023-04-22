import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

import { ModalWindow } from '@/ui/ModalWindow'
import { AppLayout } from '@layouts/AppLayout'



export default function Home() {
  const [active, setActive] = useState(false)

  const { t } = useTranslation(['header'])

  return (
    <main>
      <AppLayout>
        <h1 onClick={() => setActive(true)}>{t('header:more')}</h1>
        <ModalWindow active={active} setActive={setActive}>
          <h1>Hello</h1>
        </ModalWindow>
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
