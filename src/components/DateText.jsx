import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const DateText = ({ date }) => (
  <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
)

DateText.propTypes = {
  date: PropTypes.string
}

export default DateText
