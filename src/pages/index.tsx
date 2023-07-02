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
import { iMovieToSliderProps } from '@/utils/functions/iMovieToSliderProps'
import { AppLayout } from '@layouts/AppLayout'

import { NextPageWithLayout } from './_app'
import top10 from './data.json'
import styles from './pages.module.scss'

export interface IHomePage {
  newMovies: IMovie[]
  kindCartoons: IMovie[]
  //top10: IMovie[]
  lang: string
}

const Home: NextPageWithLayout<IHomePage> = ({
  newMovies,
  kindCartoons,
  //top10,
  lang,
}) => {
  const { t } = useTranslation()

  //const top10Out = iMovieToSliderProps(top10, lang)
  const newMoviesOut = iMovieToSliderProps(newMovies, lang)
  const kindCartoonsOut = iMovieToSliderProps(kindCartoons, lang)

  return (
    <>
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
          <IconInText
            className={styles.clauseTitle}
            text={`${t('ForTheWeek')}`}
            extIcon
            icon='top10'
            sizeIcon='unset'
            orderIcon='before'
          />
          <Slider
            Component={MovieCard}
            arrowSize='big'
            //slidesToScroll={6}
            componentSetting={{
              style: 'fill',
              type: 'square',
              imgAlt: 'Movie Image',
              mode: 'top10',
            }}
            isCrop={true}
            type='list'
            items={top10.map((item) => {
              return {
                href: item.urlFilm,
                imgSrc: item.poster,
                imgText: item.imgText,
                imgNum: item.imgNum,
              }
            })}
            onItemClick={() => {}}
          />
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
            text={`${t('Drams')}`}
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
            slidesToShow={7}
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
            slidesToShow={7}
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
    AxiosResponse<IMovie[]>
  >(`filter/films?genres=drama&limit=20`)

  const newMovies = await $instance.get<
    AxiosRequestConfig<undefined>,
    AxiosResponse<IMovie[]>
  >(`filter/films?year_min=2000&limit=20`)

  // const top10 = await $instance.get<
  //   AxiosRequestConfig<undefined>,
  //   AxiosResponse<IMovie[]>
  // >(`filter/films?rating=8.2&limit=10`)

  return {
    props: {
      newMovies: newMovies.data,
      kindCartoons: kindCartoons.data,
      //top10: top10.data,
      lang: locale,
      ...localeData,
    },
  }
}
