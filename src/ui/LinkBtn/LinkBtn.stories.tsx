import { Meta, StoryObj } from '@storybook/react'

import { LinkBtn } from './LinkBtn'

import '@styles/index.scss'


const meta: Meta<typeof LinkBtn> = {
  title: 'LinkBtn',
  component: LinkBtn,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Изменение вида кнопки',
      options: ['square', 'circle'],
      control: { type: 'radio' },
    },
    href: {
      description: 'URL ссылки',
    },
    text: {
      description: 'Основной текст',
    },
    subText: {
      description: 'Дополнительный текст',
    },
    mode: {
      description: 'Изменение мода кнопки',
      control: { type: 'select' },
    },
    icon: {
      description: 'Название иконки',
    },
    imgAlt: {
      description: 'Ссылка на картинку',
    },
    imgSrc: {
      description: 'Если картинка не подгрузилась',
    },
  },
  parameters: {
    backgrounds: {
      default: 'facebook',
      values: [
        { name: 'twitter', value: '#00aced' },
        { name: 'facebook', value: '#100e19' },
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof LinkBtn>

export const WithoutIcon: Story = {
  args: {
    mode: 'footer',
    type: 'square',
    text: 'Play Store',
    subText: 'Загрузить в',
    href: '#',
  },
}

export const WithoutSutText: Story = {
  args: {
    mode: 'footer',
    type: 'square',
    text: 'Click me',
    icon: 'googlePlay',
    iconExt: true,
    href: '#',
  },
}

export const WithoutText: Story = {
  args: {
    mode: 'footer',
    type: 'circle',
    icon: 'googlePlay',
    iconExt: true,
    href: '#',
  },
}

export const WithAll: Story = {
  args: {
    mode: 'footer',
    type: 'square',
    text: 'Play Store',
    subText: 'Загрузить в',
    icon: 'googlePlay',
    iconExt: true,
    href: '#',
  },
}

export const ActorLink: Story = {
  args: {
    mode: 'actor',
    href: '#',
    type: 'square',
    imgSrc:
      'https://thumbs.dfs.ivi.ru/storage15/contents/2/b/ae10860096fcbe6411a51eb085098b.jpg',
    imgAlt: 'Actor Image',
    text: 'Франсуа Клюзе',
  },
}

export const GenreLink: Story = {
  args: {
    mode: 'genres',
    href: '#',
    type: 'square',
    icon: 'drama',
    iconSize: 'big',
    text: 'Драмы',
  },
}

export const FeatureLink: Story = {
  args: {
    mode: 'footer',
    href: '#',
    type: 'circle',
    text: 'Американские фильмы',
    background: 'lightgray',
  },
}

export const AccountLink: Story = {
  args: {
    mode: 'account',
    icon: 'profile',
    type: 'square',
    href: '#',
  },
}

export const AccountFunctionLink: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,minmax(155px,1fr))',
          width: '66.7%',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    mode: 'accountLinks',
    icon: 'quality',
    href: '#',
    text: 'История просмотров',
    type: 'square',
  },
}
