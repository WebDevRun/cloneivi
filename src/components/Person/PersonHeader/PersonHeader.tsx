import Image from 'next/image'
import { FC } from 'react'

import styles from './PersonHeader.module.scss'

export interface PersonHeaderProps {}

export const PersonHeader: FC<PersonHeaderProps> = () => {
  return (
    <div className={styles.personHeader}>
      <div className='figure'>
        <Image
          className={styles.image}
          src='https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85'
          alt={''}
          width='120'
          height='144'
        />
      </div>
      <h1 className={styles.title}>Оскар Айзек</h1>
      <div className={styles.alternate}>Oscar Isaak</div>
      <div className={styles.story}>
        <div className={styles.clause}>
          <div className={styles.text}>
            <p>
              Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший
              известным благодаря главной роли в картине братьев...
            </p>
            <span className={styles.toggle}>Развернуть</span>
          </div>
        </div>
      </div>
      <div className={styles.anchorLink}>
        <a href='#filmography'>47 фильмов</a>
      </div>
    </div>
  )
}
