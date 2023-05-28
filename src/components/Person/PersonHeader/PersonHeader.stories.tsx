import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { PersonHeader } from './PersonHeader'

const meta: Meta<typeof PersonHeader> = {
  title: 'Person/PersonHeader',
  tags: ['autodocs'],
  component: PersonHeader,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof PersonHeader>

export const Default: Story = {
  args: {
    person_id: '8b937072-e8c3-4d6d-a714-b5cab7749c83',
    first_name_ru: 'Тина',
    last_name_ru: 'Кэннон',
    first_name_en: 'Tina',
    last_name_en: 'Cannon',
    img: '//avatars.mds.yandex.net/get-kinopoisk-image/1898899/bb58a1e6-a2b5-402c-84bc-e689275651b9/280x420',
    films: [
      {
        film_id: '984fdb2d-da0c-4e04-926a-f72f103c4ccb',
      },
      {
        film_id: '934bf135-3edd-41e4-a463-b242a4340279',
      },
      {
        film_id: 'f33f8a57-4891-4331-9bff-7ec0d0a22e14',
      },
      {
        film_id: '89818d72-296b-441b-b25f-c4219f110981',
      },
    ],
  },
}
