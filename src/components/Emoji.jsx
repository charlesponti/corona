import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Emoji = ({ name, emoji }) => (
  <Typography style={{ fontSize: '3rem' }}>
    <span role="img" aria-label={`${name} emoji`}>
      {emoji}
    </span>
  </Typography>
)

Emoji.propTypes = {
  name: PropTypes.string,
  emoji: PropTypes.string
}

export default Emoji
