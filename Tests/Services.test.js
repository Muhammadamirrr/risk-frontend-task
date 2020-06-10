import React from 'react'
import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import Services from '../components/Services'

describe('Services', () => {
  it('renders the component correctly', () => {
    render(<Services />)

    // Assert heading is rendered
    const headingElement = screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === 'Services that we'
      const nodeHasText =
        hasText(element) ||
        (element.querySelector('*') &&
          Array.from(element.childNodes).some(hasText))
      return (
        nodeHasText && Array.from(element.children).every(() => nodeHasText)
      )
    })
    expect(headingElement).toBeInTheDocument()

    // Assert description is rendered
    const descriptionElement = screen.getByText((content, element) => {
      const regex = /The best choice for buying and selling/i
      return regex.test(content)
    })
    expect(descriptionElement).toBeInTheDocument()

    // Assert service cards are rendered
    const securityCard = screen.getByText('Security gurantee')
    expect(securityCard).toBeInTheDocument()

    const exchangeRatesCard = screen.getByText('Best exchange rates')
    expect(exchangeRatesCard).toBeInTheDocument()

    const transactionsCard = screen.getByText('Fastest transactions')
    expect(transactionsCard).toBeInTheDocument()
  })
})
