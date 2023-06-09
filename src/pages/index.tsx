import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { TextCollapse } from '@/components/TextCollapse'
import { Button } from '@/ui/Button'
import { IconInText } from '@/ui/IconInText'
import { Flex, H2, Text, TextPar } from '@/ui/ui'
import { AppLayout } from '@layouts/AppLayout'

import { NextPageWithLayout } from './_app'
import styles from './pages.module.scss'

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t('common:more')}</h1>

      <div className={styles.home}>
        <section>
          <Flex gap='gap16'>
            <Button
              icon='lightning'
              size='big'
              background='gray'
              width='full'
              text={`30 ${t('DaysSubscriptionFor')} 1 ₽`}
            />
            <Button
              size='big'
              background='gray'
              width='full'
              text={`${t('ActivateCertificate')}`}
            />
          </Flex>
        </section>

        <section>
          <H2 className={styles.clauseTitle}>
          {`${t('IviOnlineCinemaMoviesInHighQuality')}`}
          </H2>

          <TextCollapse maxChar={231}>
            <div className={styles.clauseText}>
              <TextPar>
                Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет
                усложнять себе жизнь – и вы наверняка один из них! А раз так, то
                Иви – это именно тот ресурс, который вам нужен. От лучших
                кинолент в HD-качестве вас отделяет буквально один клик. Мы не
                просто освобождаем от необходимости идти в кинотеатр или изучать
                программу телепередач – у посетителей нашего ресурса гораздо
                больше возможностей.
              </TextPar>
              <TextPar>
                Видеотека Иви – это постоянно пополняющаяся коллекция в рунете,
                которая насчитывает более 60 тысяч отечественного и зарубежного
                контента, доступного для просмотра онлайн. Мы первыми в России
                подписали контракты с крупнейшими голливудскими студиями (Walt
                Disney, Sony, 20th Century Fox, Universal, Paramount, MGM и
                другими) и на постоянной основе сотрудничаем с крупнейшими
                российскими компаниями и телеканалами.
              </TextPar>
              <TextPar>Онлайн-кинотеатр ivi.ru – это:</TextPar>
              <ol>
                <li>
                  уникальная рекомендательная система, учитывающая ваши
                  предпочтения и предлагающая посмотреть именно то, что точно
                  придется вам по душе;
                </li>
                <li>
                  просмотр в одно касание на любом из устройств, подключенном к
                  вашему Иви-аккаунту – от смартфонов до телевизоров с
                  технологией Smart TV;
                </li>
                <li>
                  возможность скачивать в память мобильного устройства
                  лицензионный контент и смотреть его без доступа к Интернету;
                </li>
                <li>
                  уникальные условия и преимущества для обладателей подписки
                  Иви, делающей кинопросмотр комфортным и приятным;
                </li>
                <li>
                  удобная и продвинутая система уведомлений, вы не пропустите
                  выход крутого обсуждаемого блокбастера – мы известим о
                  появлении подходящим для вас способом;
                </li>
                <li>
                  возможность добавлять фильмы в «смотреть позже», чтобы
                  вернуться к ним в свободное время;
                </li>
                <li>
                  контент, для просмотра которого не требуется устанавливать
                  видеоплееры или искать кодеки;
                </li>
                <li>
                  просмотр онлайн контента хорошего разрешения без регистрации и
                  смс.
                </li>
              </ol>
              <TextPar>
                Откройте для себя возможность смотреть фильмы онлайн бесплатно в
                отличном качестве с кинотеатром Иви!
              </TextPar>
            </div>
          </TextCollapse>
        </section>

        <section>
          <IconInText icon='arrowRight' text={`${t('GoodAnimatedSeries')}`} />
        </section>

        <section>
          <IconInText icon='arrowRight' text={`${t('NewMovies')}`} />
        </section>

        <section className={styles.noticeTvBlock}>
          <Text variant='bold'>Смотри телеканалы* круглосуточно, непрерывно и бесплатно.</Text>
          <Text variant='bold'>
            *Первый канал, Телеканал &quot;Россия&quot; (Россия-1), Телеканал
            &quot;Матч ТВ&quot;, Телекомпания НТВ, Петербург - 5 канал,
            Телеканал &quot;Россия - Культура&quot;, Российский информационный
            канал &quot;Россия-24&quot;, Телеканал &quot;Общественное
            телевидение России&quot;, ТВ ЦЕНТР
          </Text>
        </section>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const localeData = await serverSideTranslations(locale ?? 'ru', ['common'])
  return {
    props: {
      ...localeData,
    },
  }
}
