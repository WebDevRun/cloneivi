import { useTranslation } from 'next-i18next'
import { FC } from 'react'

import { Button } from '@/ui/Button'
import { Flex, Text } from '@/ui/ui'
import { declOfNum } from '@/utils/functions/declinOfNum'

import styles from './MovieRating.module.scss'

export interface MovieRatingProps {
  rating: number
  assessments: number
}

export const MovieRating: FC<MovieRatingProps> = ({ rating, assessments }) => {
  const { t } = useTranslation()

  const words = [t('Assessment'), t('AssessmentsI'), t('AssessmentsOK'), t('Assessment')]
  const declination = declOfNum(assessments, words)

  return (
    <Flex gap='gap0' className={styles.movieRating}>
      <div className={styles.valueContainer}>
        <p className={styles.value}>{rating}</p>
      </div>
      <Flex variant='columnStart' className={styles.text}>
        <Text bold className={styles.title}>{t('KinopoiskRating')}</Text>
        <Text>{`${assessments} ${declination}`}</Text>
      </Flex>

      <div className={styles.buttonContainer}>
        <Button
          onClick={() => {}}
          text={`${t('Estimate')}`}
          withBorder='borderSm'
        />
      </div>
    </Flex>
  )
}
