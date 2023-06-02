import { FC } from 'react'

import { Button } from '@/ui/Button'
import { LinkBtn } from '@/ui/LinkBtn'

import styles from './Medallions.module.scss'

export interface IPerson {
  first_name: string
  last_name: string
  img: string
  id: string
}

export interface MedallionsProps {
  rating: number
  persons: IPerson[]
}

export const Medallions: FC<MedallionsProps> = ({ rating, persons }) => {
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
            key={person.id}
            href={`/person/${person.id}`}
            imgAlt={`${person.first_name} ${person.last_name}`}
            imgSrc={person.img}
            mode='actor'
            text={`${person.first_name} ${person.last_name}`}
            type='square'
          />
        )
      })}
    </div>
  )
}
