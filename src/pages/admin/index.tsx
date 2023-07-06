import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsAdmin(!!localStorage.getItem('isUserAdmin'))
    if (isAdmin) {
      router.push('/admin/films')
    } else router.push('/')
  }, [])
}

export default Admin
