import { FC, ReactNode, useEffect, useState } from 'react'

import styles from './NativeScroll.module.scss'

export interface INativeScroll {
  children: ReactNode
}

export const NativeScroll: FC<INativeScroll> = ({ children }) => {
  const [heightStripe, setHeightStripe] = useState(20)
  const [offsetLine, setOffsetLine] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { height, marginTop, marginBottom } = getComputedStyle(
      e.currentTarget.querySelectorAll('a')[1].closest('li') as HTMLElement,
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

  useEffect(() => {
    setOffsetLine(0)
  }, [children])

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
