import { IRating, IYear } from '@/types/movie'
import { IMenuItem } from '@/types/navigate'
export const IVI_RATING = 'ivi_rating_10_gte'
export const MENU: IMenuItem[] = [
  { id: '1', name: 'Мой Иви', href: 'https://www.ivi.ru/' },
  { id: '2', name: 'Что нового', href: 'https://www.ivi.ru/new' },
  { id: '3', name: 'Фильмы', href: 'https://www.ivi.ru/movies' },
  { id: '4', name: 'Сериалы', href: 'https://www.ivi.ru/series' },
  { id: '5', name: 'Мультфильмы', href: 'https://www.ivi.ru/animation' },
  { id: '6', name: 'TV+', href: 'https://www.ivi.ru/tvplus' },
]

export const YEARS: IYear[] = [
  {
    year_id: '0',
    year_name: '2023 год',
    slug: '2023',
    year: 2023,
  },
  {
    year_id: '1',
    year_name: '2022 год',
    slug: '2022',
    year: 2022,
  },
  {
    year_id: '2',
    year_name: '2021 год',
    slug: '2021',
    year: 2021,
  },
  {
    year_id: '3',
    year_name: '2020 год',
    slug: '2020',
    year: 2020,
  },
  {
    year_id: '4',
    year_name: '2019 год',
    slug: '2019',
    year: 2019,
  },
  {
    year_id: '5',
    year_name: '2018 год',
    slug: '2018',
    year: 2018,
  },
  {
    year_id: '6',
    year_name: '2017 год',
    slug: '2017',
    year: 2017,
  },
  {
    year_id: '7',
    year_name: '2016 год',
    slug: '2016',
    year: 2016,
  },
  {
    year_id: '7',
    year_name: '2010-2020',
    slug: '2010-2020',
    year_min: 2010,
    year_max: 2020,
  },
  {
    year_id: '8',
    year_name: '2010-2015',
    slug: '2010-2015',
    year_min: 2010,
    year_max: 2015,
  },
  {
    year_id: '9',
    year_name: '2000-2010',
    slug: '2000-2010',
    year_min: 2000,
    year_max: 2010,
  },
  {
    year_id: '10',
    year_name: '1990-2000',
    slug: '1990-2000',
    year_min: 1990,
    year_max: 2000,
  },
  {
    year_id: '11',
    year_name: '1980-1990',
    slug: '1980-1990',
    year_min: 1980,
    year_max: 1990,
  },
  {
    year_id: '12',
    year_name: 'до 1980',
    slug: 'до 1980',
    year_max: 1980,
  },
]

export const RATINGS: IRating[] = [
  {
    rating_id: '0',
    rating_name: 'Больше 9',
    slug: '9',
    rating: 9,
  },
  {
    rating_id: '1',
    rating_name: 'Больше 8',
    slug: '8',
    rating: 8,
  },
  {
    rating_id: '2',
    rating_name: 'Больше 7',
    slug: '7',
    rating: 7,
  },
  {
    rating_id: '3',
    rating_name: 'Больше 6',
    slug: '6',
    rating: 6,
  },
]
