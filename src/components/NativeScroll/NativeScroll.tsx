import Link from 'next/link'
import { FC, useState } from 'react'

import { ILinkList } from '../../types'

import styles from './NativeScroll.module.scss'

export interface INativeScroll {
  //data: ILinkList
  children: any
}

export const NativeScroll: FC<INativeScroll> = ({ children }) => {
  const [heightStripe, setHeightStripe] = useState(20)
  const [offsetLine, setOffsetLine] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { height, marginTop, marginBottom } = getComputedStyle(
      e.currentTarget.querySelectorAll('a')[1].closest('div') as HTMLElement,
    )

    setHeightStripe(parseInt(height))

    const heightLine =
      parseInt(height) + parseInt(marginTop) + parseInt(marginBottom)

    const { clientY } = e
    const { top } = e.currentTarget.getBoundingClientRect()

    const offset = clientY - top
    if (offset !== offsetLine) {
      setOffsetLine(Math.floor(offset / heightLine) * heightLine)
    }
  }

  return (
    <div className={styles.nativeScroll}>
      <div className={styles.nativeScrollInner}>
        <div className={styles.list} onMouseMove={handleMouseMove}>
          <div className={styles.gutter}>
            <div
              className={styles.stripe}
              style={{
                height: `${heightStripe}`,
                transform: `translateY(${offsetLine}px)`,
              }}
            ></div>
          </div>
         {children}
        </div>
      </div>
    </div>
  )
}
