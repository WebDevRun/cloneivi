import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement, useEffect, useState } from 'react'

import { AccessDenied } from '@/components/AccessDenied'
import { AppLayout } from '@/layouts/AppLayout'

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsAdmin(!!localStorage.getItem('isUserAdmin'))
  }, [])

  if (isAdmin) {
    router.push('/admin/films')
  } else
    return (
      <div>
        <AccessDenied />
      </div>
    )
}

Admin.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>
}

export default Admin

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru')

  return {
    props: {
      ...localeData,
    },
  }
}
