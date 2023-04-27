import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/ui/Button'

import icon from '../../assets/images/common/ivi-subscription.svg'

import images from './posters.json'
import styles from './SubscriptionWidget.module.scss'

interface ISubscriptionWidget {
  title: string
  text: string
  textButton: string
  note: string
}

export const SubscriptionWidget: FC<ISubscriptionWidget> = ({
  title,
  text,
  textButton,
  note,
}) => {
  return (
    <div className={styles.subscriptionWidget}>
      <div className={styles.animation}>
        <div className={styles.posterBlock}>
          {images.map((items, index1) => (
            <div key={index1} className={styles.posterLane}>
              {items.map((item, index2) => (
                <a key={index2} href={item.href}>
                  <div>
                    <Image
                      className={styles.image}
                      src={item.src}
                      alt='Постер для фильма'
                      width='128'
                      height='72'
                    />
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
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
      </div>

      <Button
        background='gray'
        icon='smart'
        text={textButton}
        onClick={() => {}}
      />
    </div>
  )
}
