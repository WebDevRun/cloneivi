import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/ui/Button'

import icon from '../../assets/images/common/ivi-subscription.svg'

import styles from './SubscriptionWidget.module.scss'

interface IPoster {
  poster: string
  movie: string
}

interface ISubscriptionWidget {
  posters: IPoster[][]
  size?: 'big' | 'small'
  title?: string
  text?: string
  textButton?: string
  note?: string
}

export const SubscriptionWidget: FC<ISubscriptionWidget> = ({
  posters,
  size = 'small',
  title,
  text,
  textButton,
  note,
}) => {
  const isSmall = size === 'small' ? true : false

  return (
    <div className={cn(styles.subscriptionWidget, !isSmall && styles[size])}>
      <div className={styles.animation}>
        <div className={styles.posterBlock}>
          {posters.map((items, index1) => (
            <div key={index1} className={styles.posterLane}>
              {items.map((item, index2) => (
                <a key={index2} href={item.movie}>
                  <div>
                    <Image
                      className={styles.image}
                      src={item.poster}
                      alt='Постер для фильма'
                      width={isSmall ? '128' : '200'}
                      height={isSmall ? '72' : '113'}
                    />
                  </div>
                </a>
              ))}
            </div>
          ))}

          {!isSmall && <div className={styles.moreLink}>{textButton}</div>}
        </div>
        {isSmall && (
          <div className={styles.bottomPanel}>
            <div className={styles.bottomFade}></div>
            <div className={styles.detailsBlock}>
              <div className={styles.badgeBrand}>
                <Image src={icon} alt='Иви' />
              </div>
              <div className={styles.detailsTextBlock}>
                <div className={styles.detailsTitle}>{title}</div>
                <div className={styles.detailsExtra}>{text}</div>
              </div>
              <div className={styles.bottomHover}>
                <div className={styles.buttonWrapper}>
                  <Button text='Подключить' size='small' />
                </div>
                <div className={styles.note}>{note}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isSmall && (
        <Button
          background='gray'
          icon='smart'
          text={textButton}
          onClick={() => {}}
        />
      )}
    </div>
  )
}
