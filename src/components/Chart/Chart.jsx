import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'

import Typography from '@material-ui/core/Typography'
import { fetchDailyData, fetchCountryConfirmedData } from '../../api'

import styles from './Chart.module.css'

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

  const barChart = dailyData.length ? (
    <Bar
      data={{
        labels: data.labels,
        datasets: [
          {
            data: data.confirmed,
            label: 'Confirmed Cases',
            borderColor: 'rgba(0, 255, 0, 0.5)',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
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
      <Grid item component={Card} xs={10}>
        <CardHeader title={countryCode === 'global' ? 'COVID-19 Cases & Deaths Over Time' : 'COVID-19 Cases & Deaths By Region'}/>
        <CardContent>
          <Typography variant="body2">
            {countryCode === 'global' ? lineChart : barChart}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  )
}

Chart.propTypes = {
  countryCode: PropTypes.string
}

export default Chart
