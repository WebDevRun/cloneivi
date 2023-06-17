import axios from 'axios'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FormEvent, ReactElement, useState } from 'react'

import { useUser } from '@/components/Avatar/useUser'
import { useLoginMutation } from '@/store/endpoints/authorization'
import { IMovieName } from '@/types/movie'
import { Button } from '@/ui/Button'
import { ChatMessage } from '@/ui/ChatMessage/ChatMessage'
import { Input } from '@/ui/Input/Input'
import { Spinner } from '@/ui/Spinner/Spinner'
import { Decor, Flex } from '@/ui/ui'
import { changeFilmName } from '@/utils/functions/crud'
import { AppLayout } from '@layouts/AppLayout'

import { Text } from '../../ui/ui'
import { NextPageWithLayout } from '../_app'

import styles from './profile.module.scss'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const Profile: NextPageWithLayout = () => {
  const [login] = useLoginMutation()
  const [isRequestGo, setIsRequestGo] = useState(false)

  const [email, setEmail] = useState('')
  const [currentUser, setCurrentUser] = useUser()

  const [password, setPassword] = useState('')
  const [isValidatePassword, setIsValidatePassword] = useState(false)
  const [passwordMatсh, setPasswordMatсh] = useState(false)
  const [isSignIn, setIsSignIn] = useState(false)

  const [isEmailRegistered, setIsEmailRegistered] = useState(false)
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)

  const { t } = useTranslation()
  const router = useRouter()

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

  const handleComeUpWithPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement
    setIsValidatePassword(true)
  }

  const handleRepeatPassword = (pasw: string) => {
    if (password === pasw) {
      setPasswordMatсh(true)
    }
  }

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement
    setPassword(target.comeUpWithPassword.value)

    try {
      const response = await axios.post(
        `${BASE_URL}/signup`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true },
      )

      localStorage.setItem('accessToken', response.data.accessToken)

      localStorage.setItem('currentUser', email)

      setIsSignIn(true)

      setTimeout(() => {
        setIsRequestGo(false)
        router.reload()
      }, 500)
    } catch (error) {
      setIsPasswordInvalid(true)
    }
  }

  const handleInputPassword = (passw: string) => {
    setIsPasswordInvalid(false)
    setPassword(passw)
  }

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login({ email, password })
  }

  const handleBtnVk = () => {
    router.push(
      'https://id.vk.com/auth?app_id=2303446&state=&response_type=code&redirect_uri=https%3A%2F%2Fsocial.yandex.ru%2Fbroker%2Fredirect%3Furl%3Dhttps%253A%252F%252Fsocial.yandex.ru%252Fbroker2%252F0113610d2c1e41eeabbf24d11147a03c%252Fcallback&redirect_uri_hash=7aac4e1451ac7a65e3&code_challenge=&code_challenge_method=&return_auth_hash=c79c0d048a36686a7d&scope=4259840&force_hash=',
    )
  }

  const handleBtnGoogle = () => {
    router.push('https://accounts.google.com')
  }

  const handleLogout = async () => {
    setIsRequestGo(true)
    localStorage.setItem('currentUser', '')

    const response = await axios.delete(`${BASE_URL}/logout`, {
      withCredentials: true,
    })

    setTimeout(() => {
      setIsRequestGo(false)
      setCurrentUser

      console.log(setCurrentUser)
      router.push('/')

      //router.reload()
    }, 500)
  }

  // i.jashkin@yandex.ru
  // admin@gmail.com
  // qwer@bk.ru

  // "user_id": "358df730-e473-4b2b-a504-e0af8899df97",
  // "email": "injashkin@gmail.com",

  const handleSubmitTest = (e: FormEvent<HTMLFormElement>) => {
    const film_id = 'c20394ef-d42e-4651-8a09-90ae2b64a098'

    e.preventDefault()

    const target = e.target as HTMLFormElement

    const data: IMovieName = {
      name_ru: target.test.value,
      name_en: 'Burning Down the House2',
    }

    changeFilmName(film_id, data)
  }

  return (
    <Flex className={styles.profile} variant='center'>
      {currentUser && (
        <Flex gap='gap16' variant='column'>
          <Text variant='titleXL'>{`Профиль ${currentUser}`}</Text>
          <Button type='button' text={`Выйти`} onClick={handleLogout} />
          {isRequestGo && <Spinner />}
        </Flex>
      )}

      {!currentUser && (
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
                title='Придумайте пароль для входа'
                extra='Установите пароль для входа через email, минимум 6 символов'
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
                onSubmit={handleComeUpWithPassword}
              >
                <Input
                  label={`Придумайте пароль`}
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
                  label={`Придумайте пароль`}
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
                  label={`Повторите пароль`}
                  type='password'
                  name={'repeatPassword'}
                  onChange={(e) => handleRepeatPassword(e.target.value)}
                />

                <Button
                  type='submit'
                  width='full'
                  text={`Зарегистрироваться`}
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
                  onChange={(e) => handleInputPassword(e.target.value)}
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
                  <ChatMessage title='Вы успешно вошли' variant='success' />
                  <Button type='button' text={`Выйти`} onClick={handleLogout} />
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
