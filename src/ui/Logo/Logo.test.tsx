import { render, screen } from '@testing-library/react'

import Logo from './Logo'

describe('Logo tests', () => {
  it('should background-color be black', () => {
    render(<Logo />)

    const image = screen.getByRole('img')

    expect(image).toHaveClass('logo')
  })
})
