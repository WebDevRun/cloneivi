import { useEffect, useState } from 'react'

import { LinkBtn } from '@/ui/LinkBtn'

import styles from './Avatar.module.scss'
//import { useUser } from './useUser'

export const Avatar = () => {
  //const [currentUser] = useUser()
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')

    if (storedUser) {
      setCurrentUser(storedUser)
    }
  }, [currentUser, setCurrentUser])

  return (
    <>
      <LinkBtn
        text={currentUser.toString().charAt(0).toUpperCase()}
        href='/profile'
        mode='account'
        background={currentUser ? 'green' : 'default'}
        icon='profile'
      />
    </>
  )
}
