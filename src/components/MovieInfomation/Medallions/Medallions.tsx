import { useRouter } from 'next/router'
import { FC } from 'react'

import { IPerson } from '@/types/person'
import { Button } from '@/ui/Button'
import { LinkBtn } from '@/ui/LinkBtn'
import { Flex, Text } from '@/ui/ui'

import styles from './Medallions.module.scss'

export interface MedallionsProps {
  rating: number
  persons: IPerson[]
  maxShowPersons?: number
}

export const Medallions: FC<MedallionsProps> = ({
  rating,
  persons,
  maxShowPersons = 4,
}) => {
  const router = useRouter()

  return (
    <Flex gap='gap4' alignItems='start' className={styles.medallions}>
      <Flex variant='column' gap='gap8' className={styles.rating}>
        <Button text={`${rating}`} theme='rating' />
        <Text variant='small' centerText className={styles.text}>
          Рейтинг <br /> Иви
        </Text>
      </Flex>
      {persons?.slice(0, maxShowPersons).map((person) => {
        return (
          <LinkBtn
            key={person.person_id}
            href={`/person/${person.person_id}`}
            imgAlt={
              router.locale === 'ru'
                ? `${person.first_name_ru} ${person.last_name_ru}`
                : `${person.first_name_en} ${person.last_name_en}`
            }
            imgSrc={person.img}
            mode='actor'
            text={
              router.locale === 'ru'
                ? `${person.first_name_ru} ${person.last_name_ru}`
                : `${person.first_name_en} ${person.last_name_en}`
            }
            type='square'
          />
        )
      })}
    </Flex>
  )
}
