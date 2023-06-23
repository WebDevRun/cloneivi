import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  State,
  emailUser,
  useIsAuthQuery,
} from '@/store/endpoints/authorization'
import { LinkBtn } from '@/ui/LinkBtn'

import styles from './Avatar.module.scss'

export const Avatar = () => {
  const { data: isEmailAuthorized } = useIsAuthQuery()
  const { data: session, status } = useSession()
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const user = session?.user?.email || session?.user?.name || email

  const isSocialAuthorized = status === 'authenticated'
  const isAuthorized = isEmailAuthorized || isSocialAuthorized

  const stateEmailUser = useSelector((state: State) => state.auth?.emailUser)

  useEffect(() => {
    dispatch(emailUser(localStorage.getItem('emailUser')))
    setEmail(localStorage.getItem('emailUser') as string)
  }, [])

  useEffect(() => {
    setEmail(stateEmailUser)
  }, [stateEmailUser])

  return (
    <LinkBtn
      text={user && user.toString().charAt(0).toUpperCase()}
      href='/profile'
      mode='account'
      background={isAuthorized ? 'green' : 'default'}
      icon='profile'
    />
  )
}
