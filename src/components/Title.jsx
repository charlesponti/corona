import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title }) => (
  <h3 style={{ marginBottom: '0.5rem' }}>
    {title}
  </h3>
)

Title.propTypes = {
  title: PropTypes.string
}

export default Title
