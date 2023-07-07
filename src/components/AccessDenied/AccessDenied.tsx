import { useTranslation } from 'next-i18next'

import { Flex, H1, NavLink, Text } from '@/ui/ui'

import styles from './AccessDenied.module.scss'

export function AccessDenied() {
  const { t } = useTranslation()

  return (
    <Flex variant='column' gap='gap16' className={styles.accessDenied}>
      <H1>{t('AccessDenied')}</H1>
      <Text>
        <NavLink href='/profile'>{t('YouMustBeLoggedInAsAnAdmin')}</NavLink>
      </Text>
    </Flex>
  )
}
