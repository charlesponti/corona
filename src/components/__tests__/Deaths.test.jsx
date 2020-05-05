import React from 'react'
import Deaths from '../Cards/Deaths'
import { render } from '@testing-library/react'

test('should render Emoji', async () => {
  const { container, findByText } = render(
    <Deaths deaths={1000} confirmed={10000} lastUpdate="2020-04-29T00:00:00.000z" />
  )
  expect(findByText('10.00 %')).toBeTruthy()
  expect(findByText('1,000')).toBeTruthy()
  expect(findByText('Tue Apr 29 2020')).toBeTruthy()
  expect(container).toMatchSnapshot()
})
