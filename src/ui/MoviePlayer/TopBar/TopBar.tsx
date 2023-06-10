import cn from 'classnames'
import { FC } from 'react'

import { MoviePlayerProps } from '../MoviePlayer'

import styles from './TopBar.module.scss'

export interface TopBarProps {
  name: MoviePlayerProps['name']
  text?: MoviePlayerProps['text']
  isHover: boolean
}

export const TopBar: FC<TopBarProps> = ({ name, text, isHover }) => {
  return (
    <div
      className={cn(styles.topBar, {
        [styles.topBar_hover]: isHover,
      })}
    >
      <div
        className={cn(styles.infoContainer, {
          [styles.infoContainer_hover]: isHover,
        })}
      >
        <p className={styles.name}>{name}</p>
        {text && <p className={styles.text}>{text}</p>}
      </div>
    </div>
  )
}
