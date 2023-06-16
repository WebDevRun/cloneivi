import { LinkBtn } from '@/ui/LinkBtn'

import styles from './Avatar.module.scss'
import { useUser } from './useUser'

export const Avatar = () => {
  const [currentUser] = useUser()

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
