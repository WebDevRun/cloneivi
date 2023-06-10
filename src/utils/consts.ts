import { IMenuItem } from '@/types/navigate'
import { IRating, IYear } from '@/types/movie'

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
    year: '2023 год',
    slug: '2023',
    filter: year => year === 2023,
  },
  {
    year_id: '1',
    year: '2022 год',
    slug: '2022',
    filter: year => year === 2022,
  },
  {
    year_id: '2',
    year: '2021 год',
    slug: '2021',
    filter: year => year === 2021,
  },
  {
    year_id: '3',
    year: '2020 год',
    slug: '2020',
    filter: year => year === 2020,
  },
  {
    year_id: '4',
    year: '2019 год',
    slug: '2019',
    filter: year => year === 2019,
  },
  {
    year_id: '5',
    year: '2018 год',
    slug: '2018',
    filter: year => year === 2018,
  },
  {
    year_id: '6',
    year: '2017 год',
    slug: '2017',
    filter: year => year === 2017,
  },
  {
    year_id: '7',
    year: '2016 год',
    slug: '2016',
    filter: year => year === 2016,
  },
  {
    year_id: '7',
    year: '2010-2020',
    slug: '2010-2020',
    filter: year => year > 2016 && year < 2020,
  },
  {
    year_id: '8',
    year: '2010-2015',
    slug: '2010-2015',
    filter: year => year > 2016 && year < 2015,
  },
  {
    year_id: '9',
    year: '2000-2010',
    slug: '2000-2010',
    filter: year => year > 2000 && year < 2010,
  },
  {
    year_id: '10',
    year: '1990-2000',
    slug: '1990-2000',
    filter: year => year > 1990 && year < 2000,
  },
  {
    year_id: '11',
    year: '1980-1990',
    slug: '1980-1990',
    filter: year => year > 1980 && year < 1990,
  },
  {
    year_id: '12',
    year: 'до 1980',
    slug: 'до 1980',
    filter: year => year < 1980,
  },
]

export const RATINGS: IRating[] = [
  {
    rating_id: '0',
    rating: 'Больше 9',
    slug: '9',
    filter: rating => rating >= 9,
  },
  {
    rating_id: '1',
    rating: 'Больше 8',
    slug: '8',
    filter: rating => rating >= 8,
  },
  {
    rating_id: '2',
    rating: 'Больше 7',
    slug: '7',
    filter: rating => rating >= 7,
  },
  {
    rating_id: '3',
    rating: 'Больше 6',
    slug: '6',
    filter: rating => rating >= 8,
  },
]