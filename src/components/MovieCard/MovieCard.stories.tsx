import { Meta, StoryObj } from '@storybook/react'

import { MovieCard } from './MovieCard'
import '../../styles/index.scss'

const meta: Meta<typeof MovieCard> = {
  title: 'MovieCard',
  tags: ['autodocs'],
  component: MovieCard,
  argTypes: {
    ageLimit: {
      description: 'Возрастное ограничение',
    },
    genre: {
      description: 'Жанры фильма',
    },
    href: {
      description: 'URL ссылки',
    },
    imgSrc: {
      description: 'URL картинки',
    },
    imgAlt: {
      description: 'Альтернативный тект если не отображается картинка',
    },
    movieName: {
      description: 'Название фильма',
    },
    rating: {
      description: 'Рейтинг фильма',
    },
    year: {
      description: 'Год выпуска фильма',
    },
    mode: {
      description: 'Виды карточек',
    },
    imgNum: {
      description: 'Массив картинок цифр'
    },
    imgText: {
      description: 'Картинка для названия фильма в топ10 категории'
    },
    exclusive: {
      description: 'Добавляет слово эксклюзив на карточку'
    }
  },
}

export default meta

type Story = StoryObj<typeof MovieCard>

export const Default: Story = {
  args: {
    ageLimit: '18+',
    href: '#',
    imgSrc:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450',
    imgAlt: 'Movie Image',
    movieName: 'Ничто не случается',
    rating: 8.3,
    year: 2019,
    genre: ['Мелодрамы'],
    mode: 'small',
  },
}

export const BigMovieCard: Story = {
  args: {
    imgSrc:
      'https://thumbs.dfs.ivi.ru/storage6/contents/7/b/8771f2bdb2fcf548eec1b9d85d117e.jpg/1216x370/',
    imgAlt: 'img',
    mode: 'big',
    href: '#',
    ageLimit: '18+',
  },
}

export const SeriesMovieCard: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    imgSrc:
      'https://thumbs.dfs.ivi.ru/storage9/contents/9/a/f24be2f83f3403512c0e4736faf475.jpg/308x174/',
    imgAlt: 'Series',
    mode: 'series',
    href: '#',
    movieName: '1. Серия 1',
    seriesDescription:
      'Однажды кролик Крош решил сделать что-нибудь полезное для своего дома и смастерил скамейку. Над своим творение он трудился несколько дней, а когда скамейка была готова, покрасил ее в приятный розовый цвет. Пока краска высыхала, кролик решил не сидеть без дела и покрасить что-нибудь еще. Ежик предложил пойти к Барашу, ведь у того наверняка найдется, что покрасить.  Юному поэту розовая краска действительно пригодилась, ведь он начал писать ей стихи.',
    seriesLength: '7 мин',
  },
}

export const TrailerCard: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    imgSrc:
      'https://thumbs.dfs.ivi.ru/storage8/contents/4/2/32d907823a0a7224338579bd227244.jpg/784x440/',
    imgAlt: 'Trailer',
    mode: 'series',
    href: '#',
    movieName: 'Трейлер (дублированный)',
    seriesLength: '2 мин',
  },
}


export const Top10: Story = {
  args: {
    href: '/',
    imgSrc:
      'https://thumbs.dfs.ivi.ru/storage6/contents/e/0/08c76a2df45108ec28af6300cc5b93.jpg/304x620/',
    imgAlt: '',
    mode: 'top10',
    imgNum: ['https://solea-parent.dfs.ivi.ru/picture/bypass/number1.svg'],
    imgText: 'https://thumbs.dfs.ivi.ru/storage4/contents/b/3/826ab6a9a975f9919837f0d17ba642.png/x200/'
  },
}