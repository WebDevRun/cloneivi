import { FC } from 'react'

import styles from './GenresButton.module.scss'

export interface GenresButtonProps {}

export const GenresButton: FC<GenresButtonProps> = () => (
  <div className={styles.genresButton}>GenresButton</div>
)
