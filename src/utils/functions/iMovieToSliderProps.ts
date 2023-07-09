import { IMovie } from "@/types/movie"

import { declOfNum } from "./declinOfNum"

const minutes = ['минута', 'минуты', 'минут']

export function iMovieToSliderProps(data: IMovie[], lang: string) {
  return data?.map((item) => {
    return {
      id: item.film_id,
      genre: [
        lang === 'ru' ? item.genres[0]?.genre_ru : item.genres[0]?.genre_en,
        `${item.duration} ${declOfNum(item.duration, minutes)}`,
      ],
      year: `${item.year}, ${item.countries[0]?.country}`,
      imgSrc: item.img,
      movieName: lang === 'ru' ? item.name_ru : item.name_en,
      rating: item.rating,
      href: `watch/${item.film_id}`,
      ageLimit: `${item.age_limit}+`,
    }
  })
}