import cn from 'classnames'
import { FC } from 'react'

import { INameIcons, INameIconsExt } from '@/types/Icons'

import { Svg } from '../Svg'
import { Text, TextVariants } from '../ui'

import styles from './IconInText.module.scss'

export interface IconInTextProps {
  icon?: INameIcons | INameIconsExt
  orderIcon?: 'before' | 'after'
  sizeIcon?: 'small' | 'middle' | 'big' | 'large' | 'unset'
  extIcon?: boolean
  text: string
  textVariant?: TextVariants
  className?: string
}

export const IconInText: FC<IconInTextProps> = ({
  icon,
  orderIcon = 'after',
  sizeIcon = 'small',
  text,
  textVariant = 'titleBg',
  extIcon = false,
  className
}) => {
  return (
    <div className={cn(styles.iconInText, styles[orderIcon], className)}>
      <Text className={styles.text} variant={textVariant}>
        {text}
      </Text>
      {icon && (
        <div className={styles.icon}>
          <Svg icon={icon} size={sizeIcon} ext={extIcon} />
        </div>
      )}
    </div>
  )
}
