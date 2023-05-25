import { Meta, StoryObj } from '@storybook/react'

import { Svg } from '../Svg'

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
  },
}

export const WithoutSutText: Story = {
  args: {
    mode: 'footer',
    type: 'square',
    text: 'Click me',
    icon: <Svg icon='googlePlay'/>,
    href: '#',
  },
}

export const WithoutText: Story = {
  args: {
    mode: 'footer',
    type: 'circle',
    icon: <Svg icon='googlePlay'/>,
    href: '#',
  },
}

export const WithAll: Story = {
  args: {
    mode: 'footer',
    type: 'square',
    text: 'Play Store',
    subText: 'Загрузить в',
    icon: <Svg icon='googlePlay'/>,
    href: '#',
  },
}

// export const ActorLink: Story = {
//   args: {
//     mode: 'actor',
//     href: '#',
//     type: 'square',
//     iconSrc:
//       'https://thumbs.dfs.ivi.ru/storage15/contents/2/b/ae10860096fcbe6411a51eb085098b.jpg',
//     iconAlt: 'Actor Image',
//     text: 'Франсуа Клюзе',
//   },
// }

export const GenreLink: Story = {
  args: {
    mode: 'genres',
    href: '#',
    type: 'square',
    icon: <Svg icon='googlePlay'/>,
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
    icon: <Svg icon='googlePlay'/>,
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
          width: '66.6666666%',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    mode: 'accountLinks',
    icon: <Svg icon='googlePlay'/>,
    href: '#',
    text: 'История просмотров',
    type: 'square',
  },
}
