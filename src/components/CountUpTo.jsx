import React from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'
import Typography from '@material-ui/core/Typography'

const CountUpTo = ({ value }) => (
  <Typography variant="h5" gutterBottom>
    <CountUp start={0} end={value} duration={process.env.NODE_ENV === 'test' ? 0 : 1.5} separator="," />
  </Typography>
)

CountUpTo.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default CountUpTo
