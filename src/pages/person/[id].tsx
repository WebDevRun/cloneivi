import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { $instance } from '@/axios'
import { BackLink } from '@/components/BackLink'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CrumbItem } from '@/components/Breadcrumbs/Breadcrumbs'
import { Person } from '@/components/Person'
import { IPerson } from '@/types/Person'
import { AppLayout } from '@layouts/AppLayout'

import styles from './PersonPage.module.scss'

export interface IPersonPage {
  person: IPerson
}

export default function PersonPage({ person }: IPersonPage) {
  const { t } = useTranslation()

  const crumbHome: CrumbItem = {
    text: t('myIvi'),
    path: '/',
  }

  const crumbCurrentPage: CrumbItem = {
    text: `${person.first_name_ru} ${person.last_name_ru}`,
    path: `/person/${person.person_id}`,
  }

  const breadCrumbsData = []
  breadCrumbsData.push(crumbHome)
  breadCrumbsData.push(crumbCurrentPage)

  return (
    <AppLayout>
      <div className={styles.backLinkSection}>
        <div className={styles.backLinkWrapper}>
          <BackLink text={t('back')}></BackLink>
        </div>
      </div>
      <Person person={person} maxShowFilms={8} />
      <div className={styles.breadCrumbs}>
        <Breadcrumbs items={breadCrumbsData} separator='slash' />
      </div>
    </AppLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IPerson[]>
  >('persons')

  const paths = data.map((person) => {
    return { params: { id: person.person_id } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru')
  const { data } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IPerson>
  >(`persons/${params?.id}`)

  return {
    props: {
      ...localeData,
      person: data,
    },
  }
}
