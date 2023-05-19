import cn from 'classnames'
import { FC } from 'react'

import { INameIcons, INameIconsExt } from '@/types/Icons'

import { Svg } from '../Svg'
import { Text, TextVariants } from '../ui'

import styles from './IconInText.module.scss'

export interface IconInTextProps {
  icon?: INameIcons | INameIconsExt
  orderIcon?: 'after' | 'before'
  sizeIcon?: 'small' | 'middle' | 'big' | 'large'
  text: string
  textVariant?: TextVariants
  ext?: boolean
}

export const IconInText: FC<IconInTextProps> = ({
  icon,
  orderIcon = 'before',
  sizeIcon,
  text,
  textVariant = 'titleBg',
  ext,
}) => {
  return (
    <div className={cn(styles.iconInText, styles[orderIcon])}>
      <Text className={styles.text} variant={textVariant}>
        {text}
      </Text>
      {icon && (
        <div className={styles.icon}>
          <Svg icon={icon} size={sizeIcon} ext={ext} />
        </div>
      )}
    </div>
  )
}
