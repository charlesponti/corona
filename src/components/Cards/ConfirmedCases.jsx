import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'

import Title from '../Title'
import CountUpTo from '../CountUpTo'
import cx from 'classnames'
import styles from './Cards.module.css'

export default function ConfirmedCases ({ confirmed }) {
  return (
    <Card className={cx(styles.card, styles.confirmed)}>
      <CardContent>
        <FontAwesomeIcon icon={faVirus} size="4x" style={{ marginBottom: '1rem' }}/>
        <Title title="Confirmed Cases" />
        <CountUpTo value={confirmed} />
      </CardContent>
    </Card>
  )
}

ConfirmedCases.propTypes = {
  confirmed: PropTypes.number,
  lastUpdate: PropTypes.string
}
