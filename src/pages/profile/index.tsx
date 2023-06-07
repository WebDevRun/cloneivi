import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
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
  const [password, setPassword] = useState('qwerty')
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)

  const { t } = useTranslation()
  const router = useRouter()

  const handleSubmitEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as HTMLFormElement
    setEmail(target.viaEmail.value)
  }

  const handleSubmitPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as HTMLFormElement
    setPassword(target.InputPassword.value)

    if (target.InputPassword.value !== password) {
      setIsPasswordInvalid(true)
    }
  }

  const handleBtnVk = () => {
    router.push(
      'https://id.vk.com/auth?app_id=2303446&state=&response_type=code&redirect_uri=https%3A%2F%2Fsocial.yandex.ru%2Fbroker%2Fredirect%3Furl%3Dhttps%253A%252F%252Fsocial.yandex.ru%252Fbroker2%252F0113610d2c1e41eeabbf24d11147a03c%252Fcallback&redirect_uri_hash=7aac4e1451ac7a65e3&code_challenge=&code_challenge_method=&return_auth_hash=c79c0d048a36686a7d&scope=4259840&force_hash=',
    )
  }

  const handleBtnGoogle = () => {
    router.push('https://accounts.google.com')
  }

  return (
    <Flex className={styles.profile} variant='center'>
      <Flex variant='column'>
        <Text className={styles.title} variant='titleSm'>
          {email ? t('Hello') : t('LoginOrRegistration')}
        </Text>
        {email && <Text>{email}</Text>}

        <Flex className={styles.messages} variant='column'>
          <ChatMessage
            title={`${t('PleaseLoginOrRegister')}`}
            extra={`${t('ToUseTheServiceOnAnyDevice')}`}
            showExtra={email ? false : true}
            className={styles.firstMessage}
          />
          {email && <ChatMessage title={email} variant='messageRight' />}
          {email && <ChatMessage title={`${t('EnterYourPasswordToLogIn')}`} />}
        </Flex>

        <div className={styles.controlsWrapper}>
          {!email && (
            <form
              name='emailForm'
              className={styles.controls}
              onSubmit={handleSubmitEmail}
            >
              <Input
                label={`${t('ViaEmail')}`}
                type='email'
                name={'viaEmail'}
              />
              <Button type='submit' width='full' text={`${t('Continue')}`} />
            </form>
          )}

          {email && (
            <form
              name='passwordForm'
              className={styles.controls}
              onSubmit={handleSubmitPassword}
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

          {isPasswordInvalid && (
            <ChatMessage
              variant='error'
              title={`${t('Error')}`}
              extra={`${t('ThePasswordIsIncorrect')}`}
            />
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

          {!email && (
            <Flex className={styles.socials} variant='center'>
              <Flex variant='column'>
                <Text>{t('LogInUsing')}</Text>
                <Flex>
                  <Button
                    onClick={handleBtnVk}
                    iconExt={true}
                    icon='vkontakte'
                    theme='social'
                  />
                  <Button
                    onClick={handleBtnGoogle}
                    icon='google'
                    iconExt={true}
                    theme='social'
                  />
                </Flex>
              </Flex>
            </Flex>
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
