import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import * as stories from './Button.stories'

const { Player, Primary, Secondary } = composeStories(stories)

describe('Button tests', () => {
  it('снимок кнопки Player', () => {
    const tree = renderer.create(<Player />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('отображает кнопку Primary', () => {
    render(<Primary />)
    const buttonElement = screen.getByText(/Оплатить подписку/i)
    expect(buttonElement).not.toBeNull()
  })

  it('отображает кнопку Secondary', () => {
    render(<Secondary />)
    const buttonElement = screen.getByText(/Смотреть по подписке/i)
    expect(buttonElement).not.toBeNull()
  })
})
