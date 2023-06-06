import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input/Input'
import { Decor, Flex } from '@/ui/ui'
import { AppLayout } from '@layouts/AppLayout'

import { Text } from '../../ui/ui'
import { NextPageWithLayout } from '../_app'

import styles from './profile.module.scss'

const Profile: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <Flex className={styles.profile} variant='center'>
      <Text className={styles.title} variant='titleSm'>
        {t('LoginOrRegistration')}
      </Text>
      <Flex variant='column'>
        <Flex variant='columnStart' className={styles.message}>
          <Text variant='titleSm'>{t('PleaseLoginOrRegister')}</Text>
          <Text variant='small'>{t('ToUseTheServiceOnAnyDevice')}</Text>
        </Flex>
        <div className={styles.controlsWrapper}>
          <div className={styles.controls}>
            <Input label={`${t('ViaEmailOrPhone')}`} name={'viaEmailOrPhone'} />
            <Button width='full' text={`${t('Continue')}`} />
          </div>

          <Text variant='small' className='privacy-policy'>
            {t('ByClickingContinueIAgree')} <br /> {t('With')} &nbsp;
            <Decor>
              <a
                href='https://www.ivi.ru/info/confidential'
                target='_blank'
                className='nbl-link nbl-link_style_chaf'
              >
                {t('ThePrivacyPolicy')}
              </a>
            </Decor>
            <br />
            {t('And')} &nbsp;
            <Decor>
              <a
                href='https://www.ivi.ru/info/agreement'
                target='_blank'
                className='nbl-link nbl-link_style_chaf'
              >
                {t('UserAgreement')}
              </a>
            </Decor>
          </Text>
        </div>
      </Flex>
    </Flex>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Profile

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', ['common'])

  return {
    props: {
      ...localeData,
    },
  }
}
