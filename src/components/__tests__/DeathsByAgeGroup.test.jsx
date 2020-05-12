import React from 'react'
import { render } from '@testing-library/react'
import DeathsByAgeGroup from '../Chart/DeathsByAgeGroup'

test('should render ConfirmedCases', async (done) => {
  const { container } = render(
    <DeathsByAgeGroup />
  )
  expect(container).toMatchSnapshot()
  done()
})
