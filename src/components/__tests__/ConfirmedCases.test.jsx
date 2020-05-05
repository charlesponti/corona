import React from 'react'
import ConfirmedCases from '../Cards/ConfirmedCases'
import { render } from '@testing-library/react'

test('should render ConfirmedCases', async (done) => {
  const { container, findByText } = render(
    <ConfirmedCases confirmed={75940000} lastUpdate="2020-04-29T00:00:00.000z" />
  )
  expect(await findByText('75,940,000')).toBeTruthy()
  expect(await findByText('1.00 %')).toBeTruthy()
  expect(await findByText('Tue Apr 29 2020')).toBeTruthy()
  expect(container).toMatchSnapshot()
  done()
})
