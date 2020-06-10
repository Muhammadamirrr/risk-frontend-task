import React from 'react'
import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import TokenSelector from '../components/TokenSelector'

describe('TokenSelector', () => {
  const tokens = [
    { id: 1, name: 'Token 1', avatar: 'avatar-1.png' },
    { id: 2, name: 'Token 2', avatar: 'avatar-2.png' },
    { id: 3, name: 'Token 3', avatar: 'avatar-3.png' },
  ]

  it('renders the component correctly', () => {
    const heading = 'Select Token'
    const selected = tokens[0]
    const setSelected = jest.fn()
    const amount = 10
    const setAmount = jest.fn()

    render(
      <TokenSelector
        heading={heading}
        tokens={tokens}
        selected={selected}
        setSelected={setSelected}
        amount={amount}
        setAmount={setAmount}
      />
    )

    // Assert label is rendered
    expect(screen.getByText(heading)).toBeInTheDocument()

    // Assert selected token name is rendered
    expect(screen.getByText(selected.name)).toBeInTheDocument()

    // Assert input value using different selectors
    const button = screen.getByRole('button', { name: /Select Token/i })
    expect(button).toBeInTheDocument()
    const input = button.parentNode.querySelector('input')
    expect(input).toHaveValue(amount)
  })
})
