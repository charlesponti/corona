import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

import Title from '../Title'
import CountUpTo from '../CountUpTo'
import Rate from '../Rate'
import DateText from '../DateText'

import styles from './Cards.module.css'

export default function Deaths ({ deaths, confirmed, lastUpdate }) {
  return (
    <Card className={cx(styles.card, styles.deaths)}>
      <CardContent>
        <FontAwesomeIcon icon={faSkullCrossbones} size="4x" style={{ marginBottom: '1rem' }}/>
        <Title title="Deaths" />
        <CountUpTo value={deaths} />
        <Rate typeOfRate="Death" percentFor={deaths} percentOf={confirmed} />
        <DateText date={lastUpdate} />
      </CardContent>
    </Card>
  )
}

Deaths.propTypes = {
  deaths: PropTypes.number,
  confirmed: PropTypes.number,
  lastUpdate: PropTypes.string
}
