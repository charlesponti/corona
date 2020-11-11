import React from 'react'
import ConfirmedCases from './ConfirmedCases'
import { render } from '@testing-library/react'

test('should render ConfirmedCases', () => {
  const { container, getByText } = render(
    <ConfirmedCases confirmed={75940000} lastUpdate="2020-04-29T00:00:00.000z" />
  )
  expect(getByText('75940000')).toBeTruthy()
  expect(container).toMatchSnapshot()
})
