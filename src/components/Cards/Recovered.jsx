import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirusSlash } from '@fortawesome/free-solid-svg-icons'

import Title from '../Title'
import CountUpTo from '../CountUpTo'
import Rate from '../Rate'
import DateText from '../DateText'

import styles from './Cards.module.css'

export default function Recovered ({ recovered, confirmed, lastUpdate }) {
  return (
    <Card className={cx(styles.card, styles.deaths)}>
      <CardContent>
        <FontAwesomeIcon icon={faVirusSlash} size="4x" style={{ marginBottom: '1rem' }}/>
        <Title title="Recovered"></Title>
        <CountUpTo value={recovered} />
        <Rate typeOfRate="Recovery" percentFor={recovered} percentOf={confirmed} />
        <DateText date={lastUpdate} />
      </CardContent>
    </Card>
  )
}

Recovered.propTypes = {
  recovered: PropTypes.number,
  confirmed: PropTypes.number,
  lastUpdate: PropTypes.string
}