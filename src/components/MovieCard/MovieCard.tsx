import { FC } from 'react';
import Link from 'next/link';

import styles from './MovieCard.module.scss';
import Image from 'next/image';
import FavoriteIcon from '@/assets/images/common/FavoriteIcon';
import SimilarIcon from '@/assets/images/common/SimilarIcon';
import RatingIcon from '@/assets/images/common/RatingIcon';
import DislikeIcon from '@/assets/images/common/DislikeIcon';

export interface MovieCardProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  ageLimit: number;
  movieName: string;
}

export const MovieCard: FC<MovieCardProps> = ({ href, imgAlt, imgSrc, ageLimit, movieName }) => {
  return (
    <Link href={href} className={styles.movieCard}>
      <div className={styles.movieCardImageCont}>
        <img className={styles.movieCardImage} src={imgSrc} alt={imgAlt} />
        <div className={styles.textBadge}>эксклюзив</div>
        <div className={styles.ageBadge}>{ageLimit}+</div>


        <div className={styles.movieInfo}>
          <div className={styles.hoards}>
            <FavoriteIcon fill='white' />
            <SimilarIcon fill='white' />
            <RatingIcon fill='white' />
            <DislikeIcon fill='white' />
          </div>
          <div className={styles.movieProperties}>
            <div className={styles.propertiesRow}>
              <div className={styles.rating}>
                <div className={styles.ratingValue}>8,1</div>
                <div className={styles.ratingGraph}>
                  <div className={styles.progress}>
                    <div style={{width: '50%'}} className={styles.progressBar}></div>
                  </div>
                  <div className={styles.progress}>
                    <div style={{width: '30%'}} className={styles.progressBar}></div>
                  </div>
                  <div className={styles.progress}>
                    <div style={{width: '70%'}} className={styles.progressBar}></div>
                  </div>
                  <div className={styles.progress}>
                    <div style={{width: '40%'}} className={styles.progressBar}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.propertiesRow}>
              <div className={styles.barChart}>
                <div className={styles.barChartName}>Сюжет</div>
                <div className={styles.progress}>
                  <div style={{width: '23%'}} className={styles.progressBar}></div>
                </div>
              </div>
            </div>
            <div className={styles.propertiesInfo}>
              <div className={styles.propertiesRow}>2012-2018, Колумбия, Криминал</div>
              <div className={styles.propertiesRow}>1 сезон</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.movieCardInfo}>
        <p className={styles.movieCardName}>{movieName}</p>
        <p className={styles.movieCardType}>Подписка</p>
      </div>
    </Link>
  )
}
