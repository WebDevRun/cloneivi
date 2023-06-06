import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Admin = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/admin/films')
  }, [router])
}

export default Admin
