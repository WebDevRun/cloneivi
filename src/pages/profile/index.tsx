import axios from 'axios'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FormEvent, ReactElement, useEffect, useState } from 'react'

import { Button } from '@/ui/Button'
import { ChatMessage } from '@/ui/ChatMessage/ChatMessage'
import { Input } from '@/ui/Input/Input'
import { Spinner } from '@/ui/Spinner/Spinner'
import { Decor, Flex } from '@/ui/ui'
import { AppLayout } from '@layouts/AppLayout'

import { Text } from '../../ui/ui'
import { NextPageWithLayout } from '../_app'

import styles from './profile.module.scss'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const Profile: NextPageWithLayout = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  const [isRequestGo, setIsRequestGo] = useState(false)

  const [email, setEmail] = useState('')
  const [currentUser, setCurrentUser] = useState('')

  const [password, setPassword] = useState('')
  const [isValidatePassword, setIsValidatePassword] = useState(false)
  const [passwordMatсh, setPasswordMatсh] = useState(false)
  const [isSignIn, setIsSignIn] = useState(false)

  const [isEmailRegistered, setIsEmailRegistered] = useState(false)
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)

  const { t } = useTranslation()
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')

    if (storedUser) {
      setCurrentUser(storedUser)
    }
  }, [currentUser, setCurrentUser])

  const handleEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as HTMLFormElement
    setEmail(target.viaEmail.value)

    try {
      const response = await axios.get(
        `${BASE_URL}/users/${target.viaEmail.value}`,
        { withCredentials: true },
      )

      setIsEmailRegistered(true)
    } catch (error) {
      setIsEmailRegistered(false)
    }
  }

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsRequestGo(true)

    const target = e.target as HTMLFormElement
    setPassword(target.comeUpWithPassword.value)

    try {
      const response2 = await axios.post(
        `${BASE_URL}/signup`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true },
      )

      const response = await axios.post(
        `${BASE_URL}/login`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true },
      )

      localStorage.setItem('accessToken', response.data.accessToken)

      setIsSignIn(true)

      setTimeout(() => {
        setIsRequestGo(false)
        localStorage.setItem('currentUser', email)
        setCurrentUser(email)
        router.reload()
      }, 500)
    } catch (error) {
      setIsPasswordInvalid(true)
    }
  }

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsRequestGo(true)

    const target = e.target as HTMLFormElement
    setPassword(target.inputPassword.value)

    if (target.inputPassword.value !== password) {
      setIsPasswordInvalid(true)
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/login`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true },
      )

      localStorage.setItem('accessToken', response.data.accessToken)

      setIsSignIn(true)

      setTimeout(() => {
        setIsRequestGo(false)
        localStorage.setItem('currentUser', email)
        setCurrentUser(email)
        router.reload()
        //router.push('/profile')
      }, 1000)
    } catch (error) {
      setIsPasswordInvalid(true)
    }
  }

  const handleLogout = async () => {
    setIsRequestGo(true)

    const response = await axios.delete(`${BASE_URL}/logout`, {
      withCredentials: true,
    })

    setTimeout(() => {
      setIsRequestGo(false)
      localStorage.setItem('currentUser', '')
      setCurrentUser('')
      //router.push('/profile')
      router.reload()
    }, 500)
  }

  return (
    <Flex className={styles.profile} variant='center'>
      {(session?.user || currentUser) && (
        <>
          <Flex gap='gap16' variant='column'>
            {currentUser && (
              <Text variant='titleXL'>{`${t('Account')} ${currentUser}`}</Text>
            )}
            {session?.user && (
              <>
                <Text variant='titleXL'>{`${t('Account')} ${
                  session.user.email
                }`}</Text>
                <Text variant='bold'>{session.user.name}</Text>
              </>
            )}
            {!session?.user && (
              <Button
                type='button'
                text={`${t('SignOut')}`}
                onClick={handleLogout}
              />
            )}

            {session?.user && (
              <Button
                type='button'
                text={`${t('SignOut')}`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              />
            )}
            {isRequestGo && <Spinner />}
          </Flex>
        </>
      )}

      {!(session?.user || currentUser) && (
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

            {email && !isEmailRegistered && (
              <ChatMessage
                title={`${t('ComeUpWithPasswordToLogIn')}`}
                extra={`${t('SetPasswordToLogInViaEmail')}`}
              />
            )}
            {email && isEmailRegistered && !isSignIn && (
              <ChatMessage title={`${t('EnterYourPasswordToLogIn')}`} />
            )}
          </Flex>

          <div className={styles.controlsWrapper}>
            {!email && (
              <form
                name='emailForm'
                className={styles.controls}
                onSubmit={handleEmail}
              >
                <Input
                  label={`${t('ViaEmail')}`}
                  type='email'
                  name={'viaEmail'}
                />
                <Button type='submit' width='full' text={`${t('Continue')}`} />
              </form>
            )}

            {email && !isEmailRegistered && !isValidatePassword && (
              <form
                name='comeUpWithPassword'
                className={styles.controls}
                onSubmit={() => setIsValidatePassword(true)}
              >
                <Input
                  label={`${t('ComeUpWithPassword')}`}
                  type='password'
                  minLength={6}
                  name={'comeUpWithPassword'}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!isValidatePassword && (
                  <Button
                    type='submit'
                    width='full'
                    text={`${t('Continue')}`}
                    disabled={password.length < 6 ? true : false}
                  />
                )}
              </form>
            )}

            {email && !isEmailRegistered && isValidatePassword && (
              <form
                name='signUp'
                className={styles.controls}
                onSubmit={handleSignUp}
              >
                <Input
                  label={`${t('ComeUpWithPassword')}`}
                  type='password'
                  name={'comeUpWithPassword'}
                  defaultValue={password}
                />
                {!password && (
                  <Button
                    type='button'
                    width='full'
                    text={`${t('Continue')}`}
                  />
                )}

                <Input
                  label={`${t('RepeatThePassword')}`}
                  type='password'
                  name={'repeatPassword'}
                  onChange={(e) => {
                    if (password === e.target.value) {
                      setPasswordMatсh(true)
                    }
                  }}
                />

                <Button
                  type='submit'
                  width='full'
                  text={`${t('SignUp')}`}
                  disabled={passwordMatсh ? false : true}
                />
              </form>
            )}

            {email && isEmailRegistered && !isSignIn && (
              <form
                name='passwordForm'
                className={styles.controls}
                onSubmit={handleSignIn}
              >
                <Input
                  label={`${t('InputPassword')}`}
                  type='password'
                  name={'inputPassword'}
                  onChange={(e) => {
                    setIsPasswordInvalid(false)
                    setPassword(e.target.value)
                  }}
                />

                <Button type='submit' width='full' text={`${t('Login')}`} />
                <Button
                  type='button'
                  icon='refresh'
                  background='transparent'
                  text={`${t('RecoverPassword')}`}
                />
                {isRequestGo && <Spinner />}
              </form>
            )}

            {isSignIn && (
              <>
                <Flex variant='center'>
                  <ChatMessage
                    title={`${t('YouHaveSuccessfullyLoggedIn')}`}
                    variant='success'
                  />
                  <Button
                    type='button'
                    text={`${t('SignOut')}`}
                    onClick={handleLogout}
                  />
                </Flex>
              </>
            )}

            {password && isPasswordInvalid && (
              <ChatMessage
                variant='error'
                title={`${t('Error')}`}
                extra={`${t('ThePasswordIsIncorrect')}`}
              />
            )}

            {!email && (
              <>
                <Text variant='small' className='privacy-policy'>
                  {t('ByClickingContinueIAgree')} <br /> {t('With')} &nbsp;
                  <Decor>
                    <a
                      href='https://www.ivi.ru/info/confidential'
                      target='_blank'
                    >
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

                <Flex className={styles.socials} variant='center'>
                  <Flex variant='column'>
                    <Text>{t('LogInUsing')}</Text>
                    <Flex>
                      <Button
                        onClick={(e) => {
                          e.preventDefault()
                          signIn()
                        }}
                        iconExt={true}
                        icon='vkontakte'
                        theme='social'
                      />

                      <Button
                        onClick={(e) => {
                          e.preventDefault()
                          signIn()
                        }}
                        icon='google'
                        iconExt={true}
                        theme='social'
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </>
            )}
          </div>
        </Flex>
      )}
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
