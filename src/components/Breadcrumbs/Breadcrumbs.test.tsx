import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import * as stories from './Breadcrumbs.stories'

const { SlashDefault, Dot } = composeStories(stories)

describe('Breadcrumbs тесты', () => {
  it('снимок с параметрами SlashDefault', () => {
    const tree = renderer.create(<SlashDefault />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
