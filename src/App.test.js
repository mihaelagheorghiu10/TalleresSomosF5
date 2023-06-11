import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention, no-unused-vars
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
