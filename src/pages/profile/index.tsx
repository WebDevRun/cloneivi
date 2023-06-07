import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FormEvent, ReactElement, useState } from 'react'

import { Button } from '@/ui/Button'
import { ChatMessage } from '@/ui/ChatMessage/ChatMessage'
import { Input } from '@/ui/Input/Input'
import { Decor, Flex } from '@/ui/ui'
import { AppLayout } from '@layouts/AppLayout'

import { Text } from '../../ui/ui'
import { NextPageWithLayout } from '../_app'

import styles from './profile.module.scss'

const Profile: NextPageWithLayout = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as HTMLFormElement

    setEmail(target.viaEmailOrPhone.value)
  }

  const { t } = useTranslation()
  return (
    <Flex className={styles.profile} variant='center'>
      <Flex variant='column'>
        <Text className={styles.title} variant='titleSm'>
          {email ? t('Hello') : t('LoginOrRegistration')}
        </Text>
        {email && <Text>{email}</Text>}

        <ChatMessage
          title={`${t('PleaseLoginOrRegister')}`}
          extra={`${t('ToUseTheServiceOnAnyDevice')}`}
          showExtra={email ? false : true}
          className={styles.firstMessage}
        />
        {email && <ChatMessage title={email} direction='right' />}
        {email && <ChatMessage title='Введите пароль, чтобы войти' />}
        <div className={styles.controlsWrapper}>
          {!email && (
            <form
              name='emailForm'
              className={styles.controls}
              onSubmit={handleSubmit}
            >
              <Input
                label={`${t('ViaEmailOrPhone')}`}
                type='email'
                name={'viaEmailOrPhone'}
              />
              <Button type='submit' width='full' text={`${t('Continue')}`} />
            </form>
          )}

          {email && (
            <form
              name='passwordForm'
              className={styles.controls}
              onSubmit={handleSubmit}
            >
              <Input
                label={`${t('InputPassword')}`}
                type='password'
                name={'InputPassword'}
              />
              <Button type='submit' width='full' text={`${t('Login')}`} />
              <Button
                type='button'
                icon='refresh'
                background='transparent'
                text={`${t('RecoverPassword')}`}
              />
            </form>
          )}

          {!email && (
            <Text variant='small' className='privacy-policy'>
              {t('ByClickingContinueIAgree')} <br /> {t('With')} &nbsp;
              <Decor>
                <a href='https://www.ivi.ru/info/confidential' target='_blank'>
                  {t('ThePrivacyPolicy')}
                </a>
              </Decor>
              <br />
              {t('And')} &nbsp;
              <Decor>
                <a href='https://www.ivi.ru/info/agreement' target='_blank'>
                  {t('UserAgreement')}
                </a>
              </Decor>
            </Text>
          )}
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
