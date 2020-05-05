import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Title = ({ title }) => (
  <Typography color="textSecondary" gutterBottom>
    {title}
  </Typography>
)

Title.propTypes = {
  title: PropTypes.string
}

export default Title
