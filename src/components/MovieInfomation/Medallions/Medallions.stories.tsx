import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Medallions } from './Medallions'

const meta: Meta<typeof Medallions> = {
  title: 'Medallions',
  tags: ['autodocs'],
  component: Medallions,
  argTypes: {
    persons: {
      description: 'Информация о персоне',
    },
    rating: {
      description: 'Рейтинг фильма',
    },
  },
}

export default meta

type Story = StoryObj<typeof Medallions>

export const Default: Story = {
  args: {
    persons: [
      {
        person_id: '5415905d-60e6-47a9-a233-b4524a2490ac',
        first_name_ru: 'Марчеллина',
        last_name_ru: 'Маршалл',
        first_name_en: 'Marcellina',
        last_name_en: 'Marshall',
        img: 'https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg',
      },
      {
        person_id: '6b74101b-9f55-4804-aaa7-8c710a9d88e2',
        first_name_ru: 'Илэйн',
        last_name_ru: 'МакЛорин',
        first_name_en: 'Elaine',
        last_name_en: 'McLaurin',
        img: 'https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg',
      },
    ],
  },
}
