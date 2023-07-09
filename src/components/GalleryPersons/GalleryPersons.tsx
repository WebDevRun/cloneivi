import Link from 'next/link'
import router from 'next/router'
import { FC } from 'react'

import { IPerson } from '@/types/person'
import { Flex, Text } from '@/ui/ui'

import { Badge } from '../Badge'

import styles from './GalleryPersons.module.scss'

export interface GalleryPersonsProps {
  persons: IPerson[]
  showMaxPersons: number
}

export const GalleryPersons: FC<GalleryPersonsProps> = ({
  persons,
  showMaxPersons,
}) => {
  const filmmakers = persons
    ?.filter((filmmaker) => filmmaker.filmRoles[0].film_role === 'режиссер')
    .sort((a, b) => b.films.length - a.films.length)

  const actors = persons
    ?.filter((actor) => actor.filmRoles[0].film_role === 'актёр')
    .sort((a, b) => b.films.length - a.films.length)
    .slice(0, showMaxPersons - filmmakers.length)

  return (
    <Flex className={styles.galleryPersons} variant='spaceBetween'>
      {filmmakers?.map((filmmaker) => (
        <Badge
          key={filmmaker.person_id}
          img={filmmaker.img}
          href={`/person/${filmmaker.person_id}`}
          firstName={
            router.locale === 'ru'
              ? filmmaker.first_name_ru
              : filmmaker.first_name_en
          }
          lastName={
            router.locale === 'ru'
              ? filmmaker.last_name_ru
              : filmmaker.last_name_en
          }
          role={filmmaker.filmRoles[0].film_role}
        />
      ))}

      {actors?.map((actor) => (
        <Badge
          key={actor.person_id}
          img={actor.img}
          href={`/person/${actor.person_id}`}
          firstName={
            router.locale === 'ru' ? actor.first_name_ru : actor.first_name_en
          }
          lastName={
            router.locale === 'ru' ? actor.last_name_ru : actor.last_name_en
          }
          role={actor.filmRoles[0].film_role}
        />
      ))}

      <Link href='#' className={styles.personItemMore}>
        <Text className={styles.caption} bold>
          Ещё
        </Text>
      </Link>
    </Flex>
  )
}
