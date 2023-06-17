import { useIsAuthQuery } from '@/store/endpoints/authorization'
import { LinkBtn } from '@/ui/LinkBtn'

import styles from './Avatar.module.scss'
import { useUser } from './useUser'

export const Avatar = () => {
  const { data: isLogin } = useIsAuthQuery()
  // const [currentUser] = useUser()

  return (
    <>
      <LinkBtn
        // text={currentUser.toString().charAt(0).toUpperCase()}
        href='/profile'
        mode='account'
        background={isLogin ? 'green' : 'default'}
        icon='profile'
      />
    </>
  )
}
