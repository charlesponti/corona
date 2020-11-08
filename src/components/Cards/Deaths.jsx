import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

import Title from '../Title'
import CountUpTo from '../CountUpTo'

export default function Deaths ({ deaths }) {
  return (
    <>
      <FontAwesomeIcon icon={faSkullCrossbones} size="4x" style={{ marginBottom: '1rem', color: "red" }}/>
      <Title title="Deaths" />
      <CountUpTo value={deaths} />
    </>
  )
}

Deaths.propTypes = {
  deaths: PropTypes.number,
  confirmed: PropTypes.number,
  lastUpdate: PropTypes.string
}
