import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import * as stories from './IconInText.stories'

const { Default, IconAfter } = composeStories(stories)

describe('IconInText tests', () => {
  it('снимок IconInText с параметрами IconAfter', () => {
    const tree = renderer.create(<IconAfter />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('отображает IconInText с параметрами Default', () => {
    render(<Default />)
    const buttonElement = screen.getByText(/Современные мультфильмы/i)
    expect(buttonElement).not.toBeNull()
  })
})
