import { useTranslation } from 'next-i18next'
import { FC, ReactElement, useState } from 'react'
import { renderToString } from 'react-dom/server'

import { Button } from '@/ui/Button'

import { cutStringOfNodes } from '../../utils/functions/cutStringOfNodes'

import styles from './TextCollapse.module.scss'

export interface TextCollapseProps {
  children: ReactElement
  maxChar?: number
  textForCollapse?: string
  textForExpand?: string
}

export const TextCollapse: FC<TextCollapseProps> = (props) => {
  const { t } = useTranslation()

  const {
    children,
    maxChar = 100,
    textForCollapse = `${t('common:collapse')}`,
    textForExpand = `${t('common:expand')}`,
  } = props

  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded((prevState) => !prevState)

  const stringNode = renderToString(children)

  const displayedText = isExpanded
    ? stringNode
    : cutStringOfNodes(stringNode, maxChar)

  const buttonText = isExpanded ? textForCollapse : textForExpand

  return (
    <div className={styles.textCollapse}>
      <div dangerouslySetInnerHTML={{ __html: displayedText }} />
      {displayedText.length > maxChar && (
        <Button
          background='transparent'
          onClick={toggleExpand}
          size='middle'
          text={buttonText}
          withBorder='borderNone'
        />
      )}
    </div>
  )
}
