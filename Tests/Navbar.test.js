import React from 'react'
import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import { useRouter } from 'next/router'

import Navbar from '../components/Navbar'

jest.mock('../assets/logo.png', () => 'logo.png')
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}))

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Navbar', () => {
  it('renders the component correctly', () => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
    }))

    render(<Navbar />)

    const logoElement = screen.getByAltText('logo')
    expect(logoElement).toBeInTheDocument()

    const marketItem = screen.getByText('Market')
    expect(marketItem).toBeInTheDocument()

    const exchangeItem = screen.getByText('Exchange')
    expect(exchangeItem).toBeInTheDocument()

    const tutorialsItem = screen.getByText('Tutorials')
    expect(tutorialsItem).toBeInTheDocument()

    const walletsItem = screen.getByText('Wallets')
    expect(walletsItem).toBeInTheDocument()

    const loginButton = screen.getByText('Login')
    expect(loginButton).toBeInTheDocument()
  })
})
