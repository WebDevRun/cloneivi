import { useTranslation } from 'next-i18next'

import { Person } from '@/components/Person'
import { Header } from '@components/Header'
import { AppLayout } from '@layouts/AppLayout'

export default function PersonPage() {

  return (
    <>
      <AppLayout>
        <Header />
        <Person />
      </AppLayout>
    </>
  )
}
