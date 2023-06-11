import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'

import { $instance } from '@/axios'
import { MovieCard } from '@/components/MovieCard'
import { Slider } from '@/components/Slider'
import { TextCollapse } from '@/components/TextCollapse'
import { IMovie } from '@/types/movie'
import { Button } from '@/ui/Button'
import { IconInText } from '@/ui/IconInText'
import { Flex, H2, Text, TextPar } from '@/ui/ui'
import { declOfNum } from '@/utils/functions/declinOfNum'
import { AppLayout } from '@layouts/AppLayout'

import { NextPageWithLayout } from './_app'
import styles from './pages.module.scss'

export interface IHomePage {
  newMovies: IMovie[]
  kindCartoons: IMovie[]
  lang: string
}

const Home: NextPageWithLayout<IHomePage> = ({
  newMovies,
  kindCartoons,
  lang,
}) => {
  const { t } = useTranslation()

  const minutes = ['минута', 'минуты', 'минут']

  const newMoviesOut = newMovies.map((item) => {
    return {
      id: item.film_id,
      genre: [
        lang === 'ru' ? item.genres[0]?.genre_ru : item.genres[0]?.genre_en,
        `${item.duration} ${declOfNum(item.duration, minutes)}`,
      ],
      year: `${item.year}, ${item.countries[0]?.country}`,
      imgSrc: item.img,
      movieName: lang === 'ru' ? item.name_ru : item.name_en,
      rating: item.rating,
      href: item.trailers[0]?.trailer,
      ageLimit: `${item.age_limit}+`,
    }
  })

  const kindCartoonsOut = kindCartoons.map((item) => {
    return {
      id: item.film_id,
      genre: [
        lang === 'ru' ? item.genres[0]?.genre_ru : item.genres[0]?.genre_en,
        `${item.duration} ${declOfNum(item.duration, minutes)}`,
      ],
      year: `${item.year}, ${item.countries[0]?.country}`,
      imgSrc: item.img,
      movieName: lang === 'ru' ? item.name_ru : item.name_en,
      rating: item.rating,
      href: item.trailers[0]?.trailer,
      ageLimit: `${item.age_limit}+`,
    }
  })

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
              <TextPar>{`${t('EveryDayMillionsOfPeople')}`}</TextPar>
              <TextPar>{`${t('TheIviVideoLibrary')}`}</TextPar>
              <TextPar>{`${t('OnlineMovieTheaterIvi')}`}</TextPar>
              <ol>
                <li>{`${t('UniqueRecommendationSystem')}`}</li>
                <li>{`${t('OneTouchViewingOnAnyOfTheDevices')}`}</li>
                <li>{`${t('TheAbilityToDownload')}`}</li>
                <li>{`${t('UniqueConditionsAndBenefits')}`}</li>
                <li>{`${t('ConvenientAndAdvancedNotificationSystem')}`}</li>
                <li>{`${t('TheAbilityToAddMovies')}`}</li>
                <li>{`${t('ContentThatYouDonotNeedToInstall')}`}</li>
                <li>{`${t('ViewingOnlineContent')}`}</li>
              </ol>
              <TextPar>{`${t('DiscoverTheOpportunity')}`}</TextPar>
            </div>
          </TextCollapse>
        </section>

        <section>
          <IconInText
            className={styles.sectionTitle}
            icon='arrowRight'
            text={`${t('GoodAnimatedSeries')}`}
          />
          <Slider
            Component={MovieCard}
            arrowSize='big'
            componentSetting={{
              style: 'fill',
              type: 'square',
              imgAlt: 'Movie Image',
              mode: 'small',
            }}
            isCrop={true}
            type='list'
            items={kindCartoonsOut}
            onItemClick={() => {}}
          />
        </section>

        <section>
          <IconInText
            className={styles.sectionTitle}
            icon='arrowRight'
            text={`${t('NewMovies')}`}
          />
          <Slider
            Component={MovieCard}
            isCrop={false}
            arrowSize='big'
            componentSetting={{
              style: 'fill',
              type: 'square',
              imgAlt: 'Movie Image',
              mode: 'small',
            }}
            items={newMoviesOut}
            type='list'
            onItemClick={() => {}}
          />
        </section>

        <section className={styles.noticeTvBlock}>
          <Text variant='bold'>{`${t('WatchTVChannels')}`}</Text>
          <Text variant='bold'>{`${t('ChannelOne')}`}</Text>
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
  const localeData = await serverSideTranslations(locale ?? 'ru')

  const kindCartoons = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IMovie>
  >(`filter/films?genres=drama`)

  const newMovies = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IMovie>
  >(`filter/films?year_min=2000`)

  return {
    props: {
      newMovies: newMovies.data,
      kindCartoons: kindCartoons.data,
      lang: locale,
      ...localeData,
    },
  }
}
