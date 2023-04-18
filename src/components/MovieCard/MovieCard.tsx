import { FC } from 'react'
import Link from 'next/link'

import styles from './MovieCard.module.scss'

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

        </div>
      </div>
      <div className={styles.movieCardInfo}>
        <p className={styles.movieCardName}>{movieName}</p>
        <p className={styles.movieCardType}>Подписка</p>
      </div>
    </Link>
  )
}
