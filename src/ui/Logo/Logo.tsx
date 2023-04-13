import Image from 'next/image'

import style from './Logo.module.scss'

export default function Logo() {
  return (
    <Image
      className={style.logo}
      src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
      alt="ivi"
      width={66}
      height={48}
      priority
    />
  )
}
