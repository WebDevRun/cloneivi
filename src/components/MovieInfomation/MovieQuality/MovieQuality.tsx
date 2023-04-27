import { FC } from 'react'

import styles from './MovieQuality.module.scss'

export interface MovieQualityProps {
  quality: string
}

export const MovieQuality: FC<MovieQualityProps> = ({ quality }) => {
  return <span className={styles.movieQuality}>{quality}</span>
}
