import { Meta, StoryObj } from '@storybook/react'

import { SliderButton } from './SliderButton'

import '@styles/index.scss'

const meta: Meta<typeof SliderButton> = {
  title: 'SliderButton',
  tags: ['autodocs'],
  component: SliderButton,
  argTypes: {
    name: {
      type: 'string',
      description: 'Название жанра',
      control: {type: 'select'},
      defaultValue: 'anime',
    },
    type: {
      type: 'string',
      description: 'Форма кнопки',
      options: ['square', 'circle'],
      control: {type: 'radio'},
      defaultValue: 'square',
    },
    style: {
      type: 'string',
      description: 'Стиль кнопки',
      options: ['fill', 'outline', 'active'],
      control: {type: 'radio'},
      defaultValue: 'outline',
    },
  },
}

export default meta

type Story = StoryObj<typeof SliderButton>

export const FilledGenres: Story = {
  args: {
    name: 'anime',
    type: 'square',
    style: 'fill',
  },
}

export const OutlinedGenres: Story = {
  args: {
    name: 'drama',
    type: 'square',
    style: 'outline',
  },
}

export const FilledCountry: Story = {
  args: {
    name: 'Россия',
    type: 'circle',
    style: 'fill',
  },
}

export const OutlinedCountry: Story = {
  args: {
    name: 'США',
    type: 'circle',
    style: 'outline',
  },
}

export const ActiveCountry: Story = {
  args: {
    name: 'Канада',
    type: 'circle',
    style: 'active',
  },
}