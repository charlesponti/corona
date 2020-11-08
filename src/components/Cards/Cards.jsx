import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Grid, makeStyles } from '@material-ui/core'
import cx from 'classnames'
import styles from './Cards.module.css'

import { fetchData, fetchCountryData } from '../../api'
import ConfirmedCases from './ConfirmedCases'
import Deaths from './Deaths'
import Recovered from './Recovered'
import DateText from '../DateText'

const useStyles = makeStyles({
  lastUpdated: {
    margin: '1rem 0 2rem'
  }
})

/**
 *
 * @param {{ countryCode: string }} props
 */
export default function Cards ({ countryCode }) {
  /**
   * @type [{ deaths: number, confirmed: number }, Function]
   */
  const [data, setData] = useState({})
  const classes = useStyles()

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

  return (
    data.confirmed ? (
      <Card>
        <Grid container justify="center" className={cx(styles.container)}>
          <Grid item xs={12} className={classes.lastUpdated}>
            last updated: {<DateText date={data.lastUpdate} />}
          </Grid>
          <Grid container spacing={1} justify="center">
            <Grid item xs={12} sm={3}>
              <ConfirmedCases confirmed={data.confirmed} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Recovered recovered={data.recovered} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Deaths deaths={data.deaths}/>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      
    ) : null
  )
}

Cards.propTypes = {
  countryCode: PropTypes.string
}
