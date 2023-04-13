import { render, screen } from '@testing-library/react'

import Home from './index'

describe('Main page tests', () => {
  it('should render', () => {
    render(<Home />)

    const textElement = screen.getByText(/clone ivi/i)

    expect(textElement).toBeInTheDocument()
  })
})
