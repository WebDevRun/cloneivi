import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'

import { $instance } from '@/axios'
import { BackLink } from '@/components/BackLink'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CrumbItem } from '@/components/Breadcrumbs/Breadcrumbs'
import { Person } from '@/components/Person'
import { IPerson } from '@/types/Person'
import { Header } from '@components/Header'
import { AppLayout } from '@layouts/AppLayout'

import styles from './PersonPage.module.scss'

export interface IPersonPage {
  person: IPerson
}

export default function PersonPage({ person }: IPersonPage) {

  const crumbHome: CrumbItem = {
    text: 'Мой Иви',
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
      <Header />
      <div className={styles.backLinkSection}>
        <div className={styles.backLinkWrapper}>
          <BackLink text='Назад'></BackLink>
        </div>
      </div>
      <Person person={person} maxShowFilms={8} />
      <div className={styles.breadCrumbs}>
        <Breadcrumbs items={breadCrumbsData}/>
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IPerson>
  >(`persons/${context.params?.id}`)

  return {
    props: {
      person: data,
    },
  }
}
