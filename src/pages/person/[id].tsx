import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Person } from '@/components/Person'
import { IPerson } from '@/components/Person/Person'
import { Header } from '@components/Header'
import { AppLayout } from '@layouts/AppLayout'

/*
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params
  //const { data } = await $instance.get(`person/${context.params?.id}`)
  const res = await fetch(`http://localhost:4000/persons/${id}`)
  const data = await res.json()
  console.log('data', data)

  if (!data) {
    return { notFound: true }
  }

  return {
    props: { person: data },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `http://localhost:4000/persons/44bd3a0c-0199-4b62-a567-5c435b9f4c18`,
  )
  const data = await res.json()
  console.log('data', data)

  //const paths = data.map(({ id }) => ({
  //  params: { id: id },
  //}))

  //return {
  //  paths: [{ params: { id: '44bd3a0c-0199-4b62-a567-5c435b9f4c18' } }],
  //  fallback: 'false',
 // }
}
*/

export default function PersonPage() {
  const [person, setPerson] = useState(null)
  
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/persons/${id}`)
      const data = await response.json()
      setPerson(data)
    }
    fetchData()
  }, [id])

  return (
    <>
      <AppLayout>
        <Header />
        <Person {...person! as IPerson} />
      </AppLayout>
    </>
  )
}
