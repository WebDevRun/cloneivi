import Image from 'next/image'
import { FC } from 'react'

import styles from './PersonHeader.module.scss'

export interface PersonHeaderProps {}

export const PersonHeader: FC<PersonHeaderProps> = () => {
  return (
    <div className={styles.personHeader}>
      {' '}
      <div className='personHeader'>
        <div className='figure'>
          <Image
            className='nbl-poster__image'
            data-stub='false'
            src='https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85'
            alt={''}
            width='120'
            height='144'
          />
        </div>
        <div className='personHeader__alternate'>Oscar Isaak</div>
        <h1 className='personHeader__title'>Оскар Айзек</h1>
        <div className='personHeader__story'>
          <div className='clause personHeader__clause'>
            <div className='clause__text is-truncated'>
              <p>
                Оскар Айзек (Oscar Isaak Hernandez) - американский актер,
                ставший известным благодаря главной роли в картине братьев...
              </p>
              <span className='clause__toggle'>Развернуть</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
