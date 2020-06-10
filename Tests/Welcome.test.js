import React from 'react'
import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import Welcome from '../components/Welcome'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

// Mock the image import
jest.mock('../assets/logo.png', () => 'logo.png')
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}))

describe('Welcome', () => {
  const mockPush = jest.fn()
  useRouter.mockImplementation(() => ({
    push: mockPush,
  }))

  beforeEach(() => {
    render(<Welcome />)
  })

  it('renders the component correctly', () => {
    // Assert component elements are rendered
    expect(screen.getAllByText(/Exchange Crypto/i)).toHaveLength(2)
    expect(screen.getByText(/Connect Wallet/i)).toBeInTheDocument()
    expect(screen.getByText(/Reliability/i)).toBeInTheDocument()
    expect(screen.getByText(/Security/i)).toBeInTheDocument()
    expect(screen.getByText(/Ethereum/i)).toBeInTheDocument()
    expect(screen.getByText(/Web 3.0/i)).toBeInTheDocument()
    expect(screen.getByText(/Low fees/i)).toBeInTheDocument()
    expect(screen.getByText(/Blockchain/i)).toBeInTheDocument()
  })
})
