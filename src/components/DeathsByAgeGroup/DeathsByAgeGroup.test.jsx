import React from 'react'
import { render } from '@testing-library/react'
import DeathsByAgeGroup from './DeathsByAgeGroup'

test('should render DeathsByAgeGroup', () => {
  const { container } = render(
    <DeathsByAgeGroup />
  )
  expect(container).toMatchSnapshot()
})
