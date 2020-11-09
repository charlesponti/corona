import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { fetchDailyData, fetchCountryConfirmedData } from '../../api'

import styles from './Chart.module.css'
import DeathByRegion from '../DeathByRegion'

const Chart = ({ countryCode }) => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      if (countryCode === 'global') {
        setDailyData(await fetchDailyData())
      } else {
        setDailyData(await fetchCountryConfirmedData(countryCode))
      }
    }

    fetchApi()
  }, [countryCode])

  /**
   * @type {{ labels: string[], confirmed: number[], deaths: number[]}}
   */
  const data = dailyData.reduce(
    ({ labels, confirmed, deaths }, d) => {
      labels.push(countryCode === 'global' ? d.date : d.label)
      confirmed.push(d.confirmed)
      deaths.push(d.deaths)
      return { labels, confirmed, deaths }
    },
    { labels: [], confirmed: [], deaths: [] }
  )

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: data.labels,
        datasets: [
          {
            data: data.confirmed,
            label: 'Confirmed Cases',
            borderColor: 'rgba(0, 0, 255, 0.5)',
            fill: true
          },
          {
            data: data.deaths,
            label: 'Deaths',
            borderColor: 'rgba(255, 0, 0, 0.5)',
            backgroundColor: 'rgba(255, 0, 0, 0.5)'
          }
        ]
      }}
    />
  ) : null

  return (
    <Grid container justify="center" className={styles.container}>
      <Grid item component={Card} xs={11}>
        <h2 style={{ paddingLeft: '16px' }}>
          {countryCode === 'global' ? 'Cases & Deaths Over Time' : 'Cases & Deaths By Region'}
        </h2>
        <CardContent>
          {countryCode === 'global' ? lineChart : <DeathByRegion data={dailyData} countryCode={countryCode} />}
        </CardContent>
      </Grid>
    </Grid>
  )
}

Chart.propTypes = {
  countryCode: PropTypes.string
}

export default Chart
