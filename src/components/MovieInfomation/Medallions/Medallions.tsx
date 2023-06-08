import { useRouter } from 'next/router'
import { FC } from 'react'

import { Button } from '@/ui/Button'
import { LinkBtn } from '@/ui/LinkBtn'

import styles from './Medallions.module.scss'

export interface IPerson {
  first_name_ru: string
  last_name_ru: string
  first_name_en: string
  last_name_en: string
  img: string
  person_id: string
}

export interface MedallionsProps {
  rating: number
  persons: IPerson[]
}

export const Medallions: FC<MedallionsProps> = ({ rating, persons }) => {
  const router = useRouter()

  return (
    <div className={styles.medallions}>
      {/* <Button
        background='transparent'
        icon='profile'
        onClick={() => {}}
        size='big'
        withBorder='borderBg'
        text={`${rating}`}
      /> */}

      {persons.map((person) => {
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
    </div>
  )
}
