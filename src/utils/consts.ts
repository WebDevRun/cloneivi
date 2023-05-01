import { IGenre } from '@/types/Movie'
import { IMenuItem } from "@/types/navigate"

export const MENU: IMenuItem[] = [
  { id: '1', name: 'Мой Иви', href: 'https://www.ivi.ru/' },
  { id: '2', name: 'Что нового', href: 'https://www.ivi.ru/new' },
  { id: '3', name: 'Фильмы', href: 'https://www.ivi.ru/movies' },
  { id: '4', name: 'Сериалы', href: 'https://www.ivi.ru/series' },
  { id: '5', name: 'Мультфильмы', href: 'https://www.ivi.ru/animation' },
  { id: '6', name: 'TV+', href: 'https://www.ivi.ru/tvplus' }
]

export const GENRES: IGenre[] = [
  {
    genre_id: '37b2031c-69ef-4f96-80f9-f7db63f0ad4b',
    genre_ru: 'драма',
    genre_en: '',
    slug: 'drama',
  },
  {
    genre_id: '93e95766-05b4-4b90-a934-7d0936f18812',
    genre_ru: 'фэнтези',
    genre_en: '',
    slug: 'fentezi',
  },
  {
    genre_id: '18c4be59-2c36-4940-911c-0dd0d1520cbd',
    genre_ru: 'криминал',
    genre_en: '',
    slug: 'kriminal',
  },
  {
    genre_id: 'fbc67088-0299-4eac-9ae0-08acf9d66ba2',
    genre_ru: 'история',
    genre_en: '',
    slug: 'istoriya',
  },
  {
    genre_id: '850aaeed-20d3-45a3-be96-af90db8fab45',
    genre_ru: 'приключения',
    genre_en: '',
    slug: 'priklyucheniya',
  },
  {
    genre_id: '5bc56c3e-d36f-49c0-ac7f-f0d22ee385e7',
    genre_ru: 'комедия',
    genre_en: '',
    slug: 'komediya',
  },
  {
    genre_id: '47b3d35c-dc1c-40d7-bc35-65d888d7f7bd',
    genre_ru: 'мелодрама',
    genre_en: '',
    slug: 'melodrama',
  },
  {
    genre_id: 'cf999928-94d6-461e-b32a-dc1527118422',
    genre_ru: 'аниме',
    genre_en: '',
    slug: 'anime',
  },
  {
    genre_id: '9a8ab187-f891-4af8-ad85-59d29b0eaaf3',
    genre_ru: 'мультфильм',
    genre_en: '',
    slug: 'multfilm',
  },
  {
    genre_id: 'b8e177d7-4295-47ed-af6c-a9e0ddbaeda3',
    genre_ru: 'боевик',
    genre_en: '',
    slug: 'boevik',
  },
  {
    genre_id: '017ca425-3f9c-4412-86f1-1a6848113e39',
    genre_ru: 'биография',
    genre_en: '',
    slug: 'biografiya',
  },
  {
    genre_id: 'ef57af37-7e8f-4017-b723-2fb8842bcfef',
    genre_ru: 'фантастика',
    genre_en: '',
    slug: 'fantastika',
  },
  {
    genre_id: 'fea1f30d-8e0a-4546-b6c8-1b9f597658ea',
    genre_ru: 'триллер',
    genre_en: '',
    slug: 'triller',
  },
  {
    genre_id: '83867c11-ef08-439e-a049-7dbb358497f0',
    genre_ru: 'военный',
    genre_en: '',
    slug: 'voennyy',
  },
  {
    genre_id: 'aaddaf21-5455-4cf2-b595-e10a283b6dc0',
    genre_ru: 'вестерн',
    genre_en: '',
    slug: 'vestern',
  },
]

export const COUNTRIES: string[] = [
  'Австралия',
  'Аргентина',
  'Армения',
  'Беларусь',
  'Бельгия',
  'Бразилия',
  'Великобритания',
  'Венгрия',
  'Германия',
  'Гонконг',
  'Дания',
  'Индия',
  'Ирландия',
  'Испания',
  'Италия',
  'Казахстан',
  'Канада',
  'Китай',
  'Колумбия',
  'Мексика',
  'Нидерланды',
  'НоваяЗеландия',
  'Норвегия',
  'Польша',
  'Россия',
  'СССР',
  'США',
  'Таиланд',
  'Турция',
  'Финляндия',
  'Франция',
  'Швейцария',
  'Швеция',
  'ЮАР',
  'Южная Корея',
  'Япония',
]

export const YEARS: number[] = [
  2023,
  2022,
  2021,
  2020,
  2019,
  2018,
  2017,
  2016,
]

export const RATINGS: number[] = [9, 8, 7, 6]