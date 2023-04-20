import { Meta, StoryObj } from '@storybook/react'

import { GENRES_ICONS } from '@/utils/consts/genres'
import { SliderButton } from '@ui/SliderButton/SliderButton'

import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  tags: ['autodocs'],
  component: Slider,
  argTypes: {
    Component: {
      description: 'Компонент внутри слайдера',
    },
    componentSetting: {
      description: 'Настройки компонент внутри слайдера',
    },
    items: {
      description: 'Массив объектов для слайдера'
    },
    onItemClick: {
      type: 'function',
      description: 'Функция при клике (должна принимать id)'
    },
    slidesToShow: {
      type: 'number',
      description: 'Сколько объектов показывать за раз'
    },
    slidesToScroll: {
      type: 'number',
      description: 'На сколько объектов скролить'
    },
    startPosition: {
      type: 'number',
      description: 'Какой элемент будет первый при загрузке слайдера'
    },
    gap: {
      type: 'number',
      description: 'Минимальные отступы между объекты'
    },
    arrowSize: {
      type: 'string',
      description: 'Размер для навигационных стрелок',
      options: ['small', 'big'],
      defaultValue: 'big',
      control: {type: 'radio'}
    }
  },
}

export default meta

type Story = StoryObj<typeof Slider>

export const GenresFilledSlider: Story = {
  args: {
    Component: SliderButton,
    componentSetting: {type: 'square', style: 'fill'},
    arrowSize: 'big',
    onItemClick: () => {},
    items: GENRES_ICONS
  },
  render: args => {
    return (
      <div style={{padding: 40}}>
        <Slider {...args}/>
      </div>
    )
  }
}

export const GenresOutlinedSlider: Story = {
  args: {
    Component: SliderButton,
    componentSetting: {type: 'square', style: 'outline'},
    arrowSize: 'small',
    onItemClick: () => {},
    items: GENRES_ICONS
  },
  render: args => {
    return (
      <div style={{padding: 20}}>
        <Slider {...args}/>
      </div>
    )
  }
}

export const CircleFilledSlider: Story = {
  args: {
    Component: SliderButton,
    componentSetting: {type: 'circle', style: 'fill'},
    arrowSize: 'small',
    onItemClick: () => {},
    items: GENRES_ICONS
  },
  render: args => {
    return (
      <div style={{padding: 20}}>
        <Slider {...args}/>
      </div>
    )
  }
}

export const CircleOutlinedSlider: Story = {
  args: {
    Component: SliderButton,
    componentSetting: {type: 'circle', style: 'outline'},
    arrowSize: 'small',
    onItemClick: () => {},
    items: GENRES_ICONS
  },
  render: args => {
    return (
      <div style={{padding: 20}}>
        <Slider {...args}/>
      </div>
    )
  }
}


