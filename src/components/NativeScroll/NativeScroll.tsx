import Link from 'next/link'
import { FC, useState } from 'react'

import { ILinkList } from '../../types'

import styles from './NativeScroll.module.scss'

export interface INativeScroll {
  data: ILinkList
}

export const NativeScroll: FC<INativeScroll> = ({ data }) => {
  const [heightStripe, setHeightStripe] = useState(20)
  const [offsetLine, setOffsetLine] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { height, marginTop, marginBottom } = getComputedStyle(
      e.currentTarget.querySelector('a')?.closest('div') as HTMLElement,
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
          {data.items.map((item) => (
            <div className={styles.item} key={item.href}>
              <Link href={item.href} title={item.title}>
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
