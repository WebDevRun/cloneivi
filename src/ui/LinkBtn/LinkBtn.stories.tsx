import { Meta, StoryObj } from '@storybook/react'

import SadGenre from '../../assets/images/genres/genre_drama_24__0.svg'
import googlePlay from '../../assets/images/install/google-play.svg'

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
    iconSrc: {
      description: 'URL картинки',
      defaultValue: '',
    },
    iconAlt: {
      description: 'Альтернативный тект если не отображается картинка',
    },
    text: {
      description: 'Основной текст',
    },
    subText: {
      description: 'Дополнительный текст',
    },
    mode: {
      description: 'Изменение мода кнопки',
      options: ['actor', 'footer'],
      control: { type: 'radio' },
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
    background: 'default',
  },
}

export const WithoutSutText: Story = {
  args: {
    mode: 'footer',
    type: 'square',
    text: 'Click me',
    iconSrc: googlePlay,
    iconAlt: 'googlePlay',
    href: '#',
    background: 'default',
  },
}

export const WithoutText: Story = {
  args: {
    mode: 'footer',
    type: 'circle',
    iconSrc: googlePlay,
    iconAlt: 'googlePlay',
    href: '#',
    background: 'default',
  },
}

export const WithAll: Story = {
  args: {
    mode: 'footer',
    type: 'square',
    text: 'Play Store',
    subText: 'Загрузить в',
    iconSrc: googlePlay,
    iconAlt: 'googlePlay',
    href: '#',
    background: 'default',
  },
}

export const ActorLink: Story = {
  args: {
    mode: 'actor',
    href: '#',
    type: 'square',
    iconSrc:
      'https://thumbs.dfs.ivi.ru/storage15/contents/2/b/ae10860096fcbe6411a51eb085098b.jpg',
    iconAlt: 'Actor Image',
    text: 'Франсуа Клюзе',
    background: 'default',
  },
}

export const GenreLink: Story = {
  args: {
    mode: 'genres',
    href: '#',
    type: 'square',
    iconSrc: SadGenre,
    iconAlt: 'Actor Image',
    text: 'Драмы',
    background: 'default',
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
    iconSrc: googlePlay,
    iconAlt: 'Account',
    type: 'square',
    href: '#',
    background: 'default',
  },
}

export const AccountFunctionLink: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,minmax(155px,1fr))',
          width: '66.6666666%',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    mode: 'accountLinks',
    iconSrc: googlePlay,
    iconAlt: 'Icon',
    href: '#',
    text: 'История просмотров',
    type: 'square',
    background: 'default',
  },
}
