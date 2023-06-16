import { useState, useEffect } from 'react'

export const useUser = () => {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')

    if (storedUser) {
      setCurrentUser(storedUser)
    }
  }, [])

  return [currentUser, setCurrentUser]
}