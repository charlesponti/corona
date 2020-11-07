import React from 'react'
import PropTypes from 'prop-types'

const DateText = ({ date }) => (
  <span>{new Date(date).toDateString().toLowerCase()}</span>
)

DateText.propTypes = {
  date: PropTypes.string
}

export default DateText
