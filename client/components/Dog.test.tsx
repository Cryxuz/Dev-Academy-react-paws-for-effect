// @vitest-environment jsdom
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '../test-setup.ts'
//
import Dog2 from './Dog2.tsx'
import Dog from './Dog.tsx'
//

// Unit test - testing in one specific module
// test by role e.g. heading
test('renders <Dog2/> with dogs name', () => {
  render(
    <Dog2
      name="Brutus"
      breed="hound"
      superpower="Humps anything and everything"
    />
  )

  const heading = screen.getByRole('heading')
  expect(heading).toHaveTextContent('Brutus')
})

// test image
test('renders <Dog/> with dogs name', () => {
  render(
    <Dog
      name="Pudge"
      breed="Bulldog"
      superpower="No Power, just super grumpy"
    />
  )

  const image = screen.getByAltText('Pudge, the bulldog')
  expect(image).toHaveAttribute('src', './images/bulldog.png')
})
