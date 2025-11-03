import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('renders the title', () => {
    render(<App />)
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
  })

  it('increments counter on click', () => {
    render(<App />)
    const button = screen.getByRole('button')
    expect(button.textContent).toContain('count is 0')
    fireEvent.click(button)
    expect(button.textContent).toContain('count is 1')
  })
})

