import { FC } from 'react'

import styles from './BackLink.module.scss'

export interface BackLinkProps {}

export const BackLink: FC<BackLinkProps> = () => {
  return <div className={styles.backLink}>Назад</div>
}
