import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'

import Title from '../Title'
import CountUpTo from '../CountUpTo'

export default function ConfirmedCases ({ confirmed }) {
  return (
    <>
      <FontAwesomeIcon icon={faVirus} size="4x" style={{ color: "purple" }}/>
      <Title title="Confirmed" />
      <CountUpTo value={confirmed} />
    </>
  )
}

ConfirmedCases.propTypes = {
  confirmed: PropTypes.number,
  lastUpdate: PropTypes.string
}
