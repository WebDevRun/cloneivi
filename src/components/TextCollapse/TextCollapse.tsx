import { useTranslation } from 'next-i18next'
import { FC, ReactElement, useEffect, useState } from 'react'
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
  const [stringNodeOut, setStringNodeOut] = useState('')

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
  const stringNodeShort = cutStringOfNodes(stringNode, maxChar)

  useEffect(() => {
    const textCollapseElement = document.createElement('div')
    textCollapseElement.classList.add(`${styles.textCollapse}`)

    textCollapseElement.innerHTML = stringNodeShort

    while (textCollapseElement.querySelectorAll(':empty').length) {
      const emptyTags = textCollapseElement.querySelectorAll(':empty')

      emptyTags.forEach((tag) => {
        tag.parentElement?.removeChild(tag)
      })
    }
    setStringNodeOut(textCollapseElement.outerHTML)
  }, [isExpanded, stringNodeShort])

  const displayedText = isExpanded
    ? stringNode
    : cutStringOfNodes(stringNodeOut, maxChar)

  const buttonText = isExpanded ? textForCollapse : textForExpand

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: displayedText }} />
      {displayedText.length > maxChar && (
        <Button
          background='transparent'
          onClick={toggleExpand}
          size='middle'
          text={buttonText}
          withBorder='borderNone'
          fields='noneFields'
        />
      )}
    </>
  )
}
