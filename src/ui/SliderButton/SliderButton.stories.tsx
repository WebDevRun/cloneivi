import { Meta, StoryObj } from '@storybook/react'

import { SliderButton } from './SliderButton'

import '@styles/index.scss'

const meta: Meta<typeof SliderButton> = {
  title: 'controls/SliderButton',
  tags: ['autodocs'],
  component: SliderButton,
  argTypes: {
    type: {
      type: 'string',
      description: 'Форма кнопки',
      options: ['square', 'circle'],
      control: { type: 'radio' },
      defaultValue: 'square',
    },
    style: {
      type: 'string',
      description: 'Стиль кнопки',
      options: ['fill', 'outline', 'active'],
      control: { type: 'radio' },
      defaultValue: 'outline',
    },
    country: {
      type: 'string',
      description: 'Имя текущей страны',
    },
    genre_id: {
      type: 'string',
      description: 'Id текущего жанра',
    },
    selected: {
      description: 'Выбранные фильтры',
    },
    slug: {
      type: 'string',
      description: 'Индентификатор фильтра',
    },
    genre_name: {
      type: 'string',
      description: 'Имя жанра',
    },
    country_id: {
      type: 'string',
      description: 'Id текущей страны',
    },
  },
}

export default meta

type Story = StoryObj<typeof SliderButton>

export const FilledGenres: Story = {
  args: {
    type: 'square',
    style: 'fill',
    genre_id: '',
    selected: [],
    slug: 'anime',
    genre_name: 'anime',
  },
}

export const OutlinedGenres: Story = {
  args: {
    type: 'square',
    style: 'outline',
    genre_id: '',
    selected: [],
    slug: 'anime',
    genre_name: 'anime',
  },
}

export const FilledCountry: Story = {
  args: {
    type: 'circle',
    style: 'fill',
    country: 'Россия',
    selected: [],
    country_id: '',
  },
}

export const OutlinedCountry: Story = {
  args: {
    type: 'circle',
    style: 'outline',
    country: 'Россия',
    selected: [],
    country_id: '',
  },
}
