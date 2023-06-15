import { useState, useEffect } from 'react'

export const useUser = () => {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    //const storedUser = JSON.parse(localStorage.getItem('currentUser'))
    const storedUser = localStorage.getItem('currentUser');
    console.log(storedUser)

    if (storedUser) {
      setCurrentUser(storedUser)
    }
  }, [])

  return [currentUser, setCurrentUser]
}
