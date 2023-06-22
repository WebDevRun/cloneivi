import axios from 'axios'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FormEvent, ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  emailUser,
  token,
  useGetUserByEmailQuery,
  useIsAuthQuery,
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
} from '@/store/endpoints/authorization'
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
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const router = useRouter()

  const [accessToken, setAccessToken] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidatePassword, setIsValidatePassword] = useState(false)
  const [passwordMatсh, setPasswordMatсh] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)

  const { data: session, status } = useSession()

  const { data: getUserByEmail } = useGetUserByEmailQuery(enteredEmail)
  const { data: isEmailAuthorized, isLoading } = useIsAuthQuery()

  const [refreshToken] = useRefreshTokenMutation()
  const [login] = useLoginMutation()
  const [logout] = useLogoutMutation()

  const isSocialAuthorized = status === 'authenticated'
  const isAuthorized = isEmailAuthorized || isSocialAuthorized

  useEffect(() => {
    dispatch(token(localStorage.getItem('accessToken')))
    setAccessToken(localStorage.getItem('accessToken') as string)

    dispatch(emailUser(localStorage.getItem('emailUser')))
    setEmail(localStorage.getItem('emailUser') as string)
  }, [])

  const handleEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as HTMLFormElement
    setEnteredEmail(target.viaEmail.value)
  }

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement
    setPassword(target.comeUpWithPassword.value)

    try {
      const response2 = await axios.post(
        `${BASE_URL}/signup`,
        {
          email: enteredEmail,
          password: password,
        },
        { withCredentials: true },
      )

      const response: any = await login({
        email: enteredEmail,
        password: password,
      })

      const accessToken = response.data.accessToken
      const emailFromJWT = getDataFromJWT(accessToken).email

      setShowSuccess(true)

      setTimeout(() => {
        dispatch(token(accessToken))
        dispatch(emailUser(emailFromJWT))

        setShowSuccess(false)
      }, 500)
    } catch (error) {
      setIsPasswordInvalid(true)
    }
  }

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement
    setPassword(target.inputPassword.value)

    if (target.inputPassword.value !== password) {
      setIsPasswordInvalid(true)
    }

    const response: any = await login({
      email: enteredEmail,
      password: password,
    })

    const accessToken = response.data.accessToken

    setAccessToken(accessToken)
    dispatch(token(accessToken))
    localStorage.setItem('accessToken', accessToken)

    const emailFromJWT = getDataFromJWT(accessToken).email
    setEmail(emailFromJWT)
    dispatch(emailUser(emailFromJWT))
    localStorage.setItem('emailUser', emailFromJWT)

    setShowSuccess(true)

    setTimeout(() => {
      setShowSuccess(false)
    }, 1000)
  }

  function getDataFromJWT(token: string) {
    return JSON.parse(window.atob(token.split('.')[1]))
  }

  const Refresh = async () => {
    const response: any = await refreshToken()
    console.log('response.data?.accessToken', response.data?.accessToken)
  }

  const handleLogout = () => {
    logout()

    setAccessToken('')
    dispatch(token(''))
    localStorage.setItem('accessToken', '')

    setEmail('')
    dispatch(emailUser(''))
    localStorage.setItem('emailUser', '')
  }

  return (
    <Flex className={styles.profile} variant='center'>
      {isAuthorized && (
        <>
          <Flex gap='gap16' variant='column'>
            {isEmailAuthorized && (
              <Text variant='titleXL'>{`${t('Account')} ${email}`}</Text>
            )}
            {isSocialAuthorized && (
              <>
                <Text variant='titleXL'>{`${t('Account')} ${
                  session?.user?.email || session?.user?.name
                }`}</Text>
                <Text variant='bold'>{session?.user?.name}</Text>
              </>
            )}
            {isEmailAuthorized && (
              <Button
                type='button'
                text={`${t('SignOut')}`}
                onClick={handleLogout}
              />
            )}

            {isSocialAuthorized && (
              <Button
                type='button'
                text={`${t('SignOut')}`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              />
            )}
            {isLoading && <Spinner />}
          </Flex>
        </>
      )}

      {!isAuthorized && (
        <Flex variant='column'>
          <Text className={styles.title} variant='titleSm'>
            {enteredEmail ? t('Hello') : t('LoginOrRegistration')}
          </Text>
          {enteredEmail && <Text>{enteredEmail}</Text>}

          <Flex className={styles.messages} variant='column'>
            <ChatMessage
              title={`${t('PleaseLoginOrRegister')}`}
              extra={`${t('ToUseTheServiceOnAnyDevice')}`}
              showExtra={enteredEmail ? false : true}
              className={styles.firstMessage}
            />

            {enteredEmail && (
              <ChatMessage title={enteredEmail} variant='messageRight' />
            )}

            {enteredEmail && !getUserByEmail && (
              <ChatMessage
                title={`${t('ComeUpWithPasswordToLogIn')}`}
                extra={`${t('SetPasswordToLogInViaEmail')}`}
              />
            )}
            {enteredEmail && getUserByEmail && !showSuccess && (
              <ChatMessage title={`${t('EnterYourPasswordToLogIn')}`} />
            )}
          </Flex>

          <div className={styles.controlsWrapper}>
            {!enteredEmail && (
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

            {enteredEmail && !getUserByEmail && !isValidatePassword && (
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

            {enteredEmail && !getUserByEmail && isValidatePassword && (
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

            {enteredEmail && getUserByEmail && !showSuccess && (
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
                {isLoading && <Spinner />}
              </form>
            )}

            {showSuccess && (
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

            {!enteredEmail && (
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
