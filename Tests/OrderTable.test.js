import React from 'react'
import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import CryptoTable from '../components/OrderTable'

describe('CryptoTable', () => {
  const testData = [
    {
      makerToken: 'Token1',
      takerToken: 'Token2',
      makerAmount: '100',
      takerAmount: '200',
      maker: 'Maker1',
      taker: 'Taker1',
    },
  ]

  it('renders the component correctly with data', () => {
    render(<CryptoTable data={testData} heading={'Table Heading'} />)

    // Assert heading is rendered
    const headingElement = screen.getByText('Table Heading')
    expect(headingElement).toBeInTheDocument()

    // Assert table headers are rendered
    const makerTokenHeader = screen.getByText('Maker Token')
    expect(makerTokenHeader).toBeInTheDocument()

    const takerTokenHeader = screen.getByText('Taker Token')
    expect(takerTokenHeader).toBeInTheDocument()

    const makerAmountHeader = screen.getByText('Maker Amount')
    expect(makerAmountHeader).toBeInTheDocument()

    const takerAmountHeader = screen.getByText('Taker Amount')
    expect(takerAmountHeader).toBeInTheDocument()

    const makerHeader = screen.getByText('Maker')
    expect(makerHeader).toBeInTheDocument()

    const takerHeader = screen.getByText('Taker')
    expect(takerHeader).toBeInTheDocument()

    // Assert table data rows are rendered
    for (const record of testData) {
      const makerTokenData = screen.getByText(record.makerToken)
      expect(makerTokenData).toBeInTheDocument()

      const takerTokenData = screen.getByText(record.takerToken)
      expect(takerTokenData).toBeInTheDocument()

      const makerAmountData = screen.getByText(record.makerAmount)
      expect(makerAmountData).toBeInTheDocument()

      const takerAmountData = screen.getByText(record.takerAmount)
      expect(takerAmountData).toBeInTheDocument()

      const makerData = screen.getByText(record.maker)
      expect(makerData).toBeInTheDocument()

      const takerData = screen.getByText(record.taker)
      expect(takerData).toBeInTheDocument()
    }
  })
})
