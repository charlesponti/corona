import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import getPercent from '../utils/getPercent'

const Rate = ({ typeOfRate, percentFor, percentOf }) => (
  <Typography>
    <b>{typeOfRate} Rate:</b> {getPercent(percentFor, percentOf)}
  </Typography>
)

Rate.propTypes = {
  typeOfRate: PropTypes.string,
  percentFor: PropTypes.number,
  percentOf: PropTypes.number
}

export default Rate
