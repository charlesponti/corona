import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import cx from 'classnames'

import styles from './Cards.module.css'
import { fetchData, fetchCountryData } from '../../api'

const LastUpdate = ({ date }) => (
  <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
)

LastUpdate.propTypes = {
  date: PropTypes.string
}

const Title = ({ title }) => (
  <Typography color="textSecondary" gutterBottom>
    {title}
  </Typography>
)

Title.propTypes = {
  title: PropTypes.string
}

const Value = ({ value }) => (
  <Typography variant="h5" gutterBottom>
    <CountUp start={0} end={value} duration={1.5} separator="," />
  </Typography>
)

Value.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default function Cards ({ countryCode }) {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchApi = async () => {
      if (countryCode === 'global') {
        setData(await fetchData())
      } else {
        setData(await fetchCountryData(countryCode))
      }
    }

    fetchApi()
  }, [countryCode])

  return data.confirmed ? (
    <Grid container justify="center" className={cx(styles.container)}>
      <Grid
        item
        xs={12}
        md={3}
        component={Card}
        className={cx(styles.card, styles.confirmed)}
      >
        <CardContent>
          <Title title="Confirmed Cases" />
          <Value value={data.confirmed} />
          <LastUpdate date={data.lastUpdate}></LastUpdate>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        component={Card}
        className={cx(styles.card, styles.recovered)}
      >
        <CardContent>
          <Title title="Recovered"></Title>
          <Value value={data.recovered} />
          <LastUpdate date={data.lastUpdate}></LastUpdate>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        component={Card}
        className={cx(styles.card, styles.deaths)}
      >
        <CardContent>
          <Title title="Deaths" />
          <Value value={data.deaths} />
          <LastUpdate date={data.lastUpdate}></LastUpdate>
        </CardContent>
      </Grid>
    </Grid>
  ) : null
}

Cards.propTypes = {
  countryCode: PropTypes.string
}
