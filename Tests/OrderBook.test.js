import React from 'react'
import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import OrderBook from '../components/OrderBook'

// Mock WebSocket
const mockWebSocket = {
  send: jest.fn(),
  close: jest.fn(),
  onopen: jest.fn(),
  onmessage: jest.fn(),
  onclose: jest.fn(),
}
global.WebSocket = jest.fn().mockImplementation(() => mockWebSocket)

describe('OrderBook', () => {
  it('renders the component correctly', () => {
    render(<OrderBook />)

    // Assert loader is initially rendered
    const loader = screen.getByRole('status')
    expect(loader).toBeInTheDocument()

    // Wait for WebSocket connection to be established and loader to disappear
    setTimeout(() => {
      // Assert order tables are rendered
      const bidsTable = screen.getByText('Real Time Order Bids')
      expect(bidsTable).toBeInTheDocument()

      const asksTable = screen.getByText('Real Time Order Asks')
      expect(asksTable).toBeInTheDocument()
    }, 0)
  })
})
