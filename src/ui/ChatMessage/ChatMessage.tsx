import cn from 'classnames'
import { FC } from 'react'

import { Flex } from '../ui'
import { Text } from '../ui'

import styles from './ChatMessage.module.scss'

export interface ChatMessageProps {
  title: string
  extra?: string
  showExtra?: boolean
  direction?: 'left' | 'right'
  className?: string
  editable?: boolean
}

export const ChatMessage: FC<ChatMessageProps> = ({
  title,
  extra,
  showExtra = true,
  direction = 'left',
  className,
  editable = false,
}) => {
  const mainCn = cn(styles.message, styles[direction], className)

  return (
    
    <Flex variant='columnStart' className={mainCn}>
      <Text variant='titleSm'>{title}</Text>
      {showExtra && extra && <Text variant='small'>{extra}</Text>}
    </Flex>
  )
}
