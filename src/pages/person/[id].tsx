import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Person } from '@/components/Person'
import { Header } from '@components/Header'
import { AppLayout } from '@layouts/AppLayout'

import styles from './PersonPage.module.scss'

export default function PersonPage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <AppLayout>
        <Header />
        <div className={styles.backLinkSection}>
          <div className={styles.backLinkWrapper}>Контейнер для BackLink</div>
        </div>
        {/*<Person {...(person! as IPerson)} />*/}
        <Person
          person_id={id as string}
          pathDataSrc='http://localhost:4000/persons/'
          maxShowFilms={8}
        />
        <div className={styles.breadCrumbs}>Контейнер для BreadCrumbs</div>
      </AppLayout>
    </>
  )
}
