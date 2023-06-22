import { useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'

import { State, useIsAuthQuery } from '@/store/endpoints/authorization'
import { LinkBtn } from '@/ui/LinkBtn'

import styles from './Avatar.module.scss'

export const Avatar = () => {
  const { data: isEmailAuthorized } = useIsAuthQuery()
  const { data: session, status } = useSession()
  const emailUser = useSelector((state: State) => state.auth?.emailUser)

  const user = session?.user?.email || session?.user?.name || emailUser

  const isSocialAuthorized = status === 'authenticated'
  const isAuthorized = isEmailAuthorized || isSocialAuthorized

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
