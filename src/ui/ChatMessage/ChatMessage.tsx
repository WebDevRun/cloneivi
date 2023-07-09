import cn from 'classnames'
import { FC } from 'react'

import { Flex } from '../ui'
import { Text } from '../ui'

import styles from './ChatMessage.module.scss'

export interface ChatMessageProps {
  title: string
  extra?: string
  showExtra?: boolean
  className?: string
  editable?: boolean
  variant?: 'messageLeft' | 'messageRight' | 'error' | 'success'
}

export const ChatMessage: FC<ChatMessageProps> = ({
  title,
  extra,
  showExtra = true,
  className,
  editable = false,
  variant = 'messageLeft',
}) => {
  const mainCn = cn(styles.message, styles[variant], className)

  return (
    <Flex variant='columnStart' className={mainCn} gap='gap4'>
      <Text variant='titleSm'>{title}</Text>
      {showExtra && extra && <Text variant='small'>{extra}</Text>}
    </Flex>
  )
}
