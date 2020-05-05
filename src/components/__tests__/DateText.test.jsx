import React from 'react'
import DateText from '../DateText'
import { render } from '@testing-library/react'

test('should render Emoji', () => {
  const { queryByText, container } = render(<DateText date="2020-04-29T00:00:00.000z" />)
  expect(queryByText(/Apr/ig)).toBeTruthy()
  expect(container).toMatchSnapshot()
})
