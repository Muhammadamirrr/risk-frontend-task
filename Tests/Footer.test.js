import React from 'react'
import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import { Footer } from '../components'

jest.mock('../assets/logo.png', () => 'logo.png')
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}))
describe('Footer', () => {
  it('renders the component correctly', () => {
    render(<Footer />)

    // Assert logo is rendered
    const logoElement = screen.getByAltText('logo')
    expect(logoElement).toBeInTheDocument()

    // Assert links are rendered
    const marketLink = screen.getByText(/Market/i)
    expect(marketLink).toBeInTheDocument()

    const exchangeLink = screen.getByText(/Exchange/i)
    expect(exchangeLink).toBeInTheDocument()

    const tutorialsLink = screen.getByText(/Tutorials/i)
    expect(tutorialsLink).toBeInTheDocument()

    const walletLink = screen.getByText(/Wallet/i)
    expect(walletLink).toBeInTheDocument()

    // Assert contact links are rendered
    const joinUsLink = screen.getByText(/Come Join Us/i)
    expect(joinUsLink).toBeInTheDocument()

    const emailLink = screen.getByText(/test@email.com/i)
    expect(emailLink).toBeInTheDocument()

    // Assert copyright text is rendered
    const copyrightText = screen.getByText(/All rights reserved/i)
    expect(copyrightText).toBeInTheDocument()
  })
})
