import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { $instance } from '@/axios'
import { BackLink } from '@/components/BackLink'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CrumbItem } from '@/components/Breadcrumbs/Breadcrumbs'
import { Person } from '@/components/Person'
import {
  getPersonById,
  getRunningQueriesThunk,
  useGetPersonByIdQuery,
} from '@/store/endpoints/persons'
import { wrapper } from '@/store/store'
import { IPerson } from '@/types/person'
import { AppLayout } from '@layouts/AppLayout'

import { NextPageWithLayout } from '../_app'

import styles from './PersonPage.module.scss'

interface IPersonPage {
  id: string
}

const PersonPage: NextPageWithLayout<IPersonPage> = ({ id }) => {
  const { t } = useTranslation()
  const router = useRouter()

  const { data: person, isError, error } = useGetPersonByIdQuery(id)

  const crumbHome: CrumbItem = {
    text: t('MyIvi'),
    path: '/',
  }

  const firstName =
    router.locale === 'ru' ? person?.first_name_ru : person?.first_name_en
  const lastName =
    router.locale === 'ru' ? person?.last_name_ru : person?.last_name_en

  const crumbCurrentPage: CrumbItem = {
    text: `${firstName} ${lastName}`,
    path: `/person/${person?.person_id}`,
  }

  const breadCrumbsData = []
  breadCrumbsData.push(crumbHome)
  breadCrumbsData.push(crumbCurrentPage)

  return (
    <>
      <div className={styles.backLinkSection}>
        <div className={styles.backLinkWrapper}>
          <BackLink text={t('Back')}></BackLink>
        </div>
      </div>
      {!isError && <Person person={person as IPerson} maxShowFilms={8} />}
      {isError && <div>{`Error!: ${error}`}</div>}
      <div className={styles.breadCrumbs}>
        <Breadcrumbs items={breadCrumbsData} separator='slash' />
      </div>
    </>
  )
}

PersonPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default PersonPage

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IPerson[]>
  >(`persons`)

  const paths = data.map((person) => {
    return { params: { id: person.person_id } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    if (typeof context.params?.id === 'string') {
      store.dispatch(getPersonById.initiate(context.params.id))
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()))

    const localeData = await serverSideTranslations(context.locale ?? 'ru', [
      'common',
    ])

    return {
      props: {
        id: context.params?.id,
        ...localeData,
      },
    }
  },
)
