// @vitest-environment jsdom
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '../test-setup.ts'

import App from './App.tsx'

test('renders dog in App.tsx', () => {
  render(<App />)

  // const heading = screen.getAllByRole('heading') //throws an error if no matching element
  const headings = screen.queryAllByRole('heading') // returns empty array if no matching element
  expect(headings).toHaveLength(3)
})

test('renders a spinning paw print', () => {
  render(<App />)

  const image = screen.getByAltText('a spinning paw-print')
  expect(image).toBeVisible()
})
