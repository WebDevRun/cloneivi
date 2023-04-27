import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/ui/Button'

import icon from '../../assets/images/common/ivi-subscription.svg'

import styles from './SubscriptionWidget.module.scss'

const images = [
  [
    {
      src: 'https://thumbs.dfs.ivi.ru/storage5/contents/1/d/5f207c9b28cbe6eae0a738eeb62116.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage15/contents/0/1/6861b22bb68ecb0de9ccb8810065a7.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage2/contents/3/a/b9cbc0e6bfb1600eb5e225ffbb3de7.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage5/contents/1/d/5f207c9b28cbe6eae0a738eeb62116.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage15/contents/0/1/6861b22bb68ecb0de9ccb8810065a7.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage2/contents/3/a/b9cbc0e6bfb1600eb5e225ffbb3de7.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
  ],
  [
    {
      src: 'https://thumbs.dfs.ivi.ru/storage9/contents/a/0/dd119bf6972e30c0d23eae7abba57f.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage2/contents/e/a/38cebde51184414ac4bc4a81d1182c.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage8/contents/e/c/e39812034d2721d646a9310ad34d1d.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage9/contents/a/0/dd119bf6972e30c0d23eae7abba57f.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage2/contents/e/a/38cebde51184414ac4bc4a81d1182c.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage8/contents/e/c/e39812034d2721d646a9310ad34d1d.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
  ],
  [
    {
      src: 'https://thumbs.dfs.ivi.ru/storage6/contents/6/f/ecc64759621a71b4b0a2ac772a9cfe.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage8/contents/5/e/6acdf3719e34bf06e6aef32f169ef5.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage15/contents/5/7/b8d058639bb931fbc5b58df3788ddf.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage6/contents/6/f/ecc64759621a71b4b0a2ac772a9cfe.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage8/contents/5/e/6acdf3719e34bf06e6aef32f169ef5.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
    {
      src: 'https://thumbs.dfs.ivi.ru/storage15/contents/5/7/b8d058639bb931fbc5b58df3788ddf.jpg',
      href: 'https://www.ivi.ru/watch/504203',
    },
  ],
]

interface ISubscriptionWidget {
  title: string
  text: string
  textButton: string
}

export const SubscriptionWidget: FC<ISubscriptionWidget> = ({
  title,
  text,
  textButton,
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
                <Button text='Подключить' />
              </div>
              <div className={styles.note}>Отключить можно в любой момент</div>
            </div>
          </div>
        </div>
      </div>
      <Button text={textButton} />
    </div>
  )
}
