import React from 'react'
import Deaths from '../Cards/Deaths'
import { render } from '@testing-library/react'

test('should render Deaths', async () => {
  const { container, getByText } = render(
    <Deaths deaths={1000} confirmed={10000} lastUpdate="2020-04-29T00:00:00.000z" />
  )
  expect(getByText('1000')).toBeTruthy()
  expect(container).toMatchSnapshot()
})
