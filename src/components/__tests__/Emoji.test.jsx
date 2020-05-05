import React from 'react'
import Emoji from '../Emoji'
import { render } from '@testing-library/react'

test('should render Emoji', () => {
  expect(render(<Emoji name="sick" emoji="🤒" />)).toMatchSnapshot()
})
