import { composeStories } from '@storybook/react'
import renderer from 'react-test-renderer'

import * as stories from './BackLink.stories'

const { Default } = composeStories(stories)

describe('BackLink tests', () => {
  it('снимок BackLink', () => {
    //const tree = renderer.create(<Default />).toJSON()
    //expect(tree).toMatchSnapshot()
  })
})
