import { FC } from 'react'

import styles from './IconInText.module.scss'

export interface IconInTextProps {}

export const IconInText: FC<IconInTextProps> = () => {
  return <div className={styles.iconInText}>IconInText</div>
}
