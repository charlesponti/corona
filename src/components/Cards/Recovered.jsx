import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirusSlash } from '@fortawesome/free-solid-svg-icons'

import Title from '../Title'
import CountUpTo from '../CountUpTo'

export default function Recovered ({ recovered }) {
  return (
    <>
      <FontAwesomeIcon icon={faVirusSlash} size="4x" style={{ marginBottom: '1rem', color: "green" }}/>
      <Title title="Recovered"></Title>
      <CountUpTo value={recovered} />
    </>
  )
}

Recovered.propTypes = {
  recovered: PropTypes.number,
  confirmed: PropTypes.number,
  lastUpdate: PropTypes.string
}
