export interface IMenuItem {
  id: string;
  name: string;
  href: string;
}

export const MENU: IMenuItem[] = [
  { id: '1', name: 'Мой Иви', href: 'https://www.ivi.ru/' },
  { id: '2', name: 'Что нового', href: 'https://www.ivi.ru/new' },
  { id: '3', name: 'Фильмы', href: 'https://www.ivi.ru/movies' },
  { id: '4', name: 'Сериалы', href: 'https://www.ivi.ru/series' },
  { id: '5', name: 'Мультфильмы', href: 'https://www.ivi.ru/animation' },
  { id: '6', name: 'TV+', href: 'https://www.ivi.ru/tvplus' }
]