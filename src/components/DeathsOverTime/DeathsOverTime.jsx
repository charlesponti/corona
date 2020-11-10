import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { fetchDailyData } from '../../api'

import styles from './DeathsOverTime.module.css'

const DeathsOverTime = ({ countryCode }) => {
  const [dataByDay, setDailyData] = useState({ labels: [] })

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchDailyData(countryCode)

    setDailyData(data.reduce(
        ({ labels, confirmed, deaths }, d) => {
          labels.push(d.date)
          confirmed.push(d.confirmed)
          deaths.push(d.deaths)
          return { labels, confirmed, deaths }
        },
        { labels: [], confirmed: [], deaths: [] }
      ))
    }

    fetchApi()
  }, [countryCode])

  /**
   * @type {{ labels: string[], confirmed: number[], deaths: number[]}}
   */
  

  return (
    <Grid container justify="center" className={styles.container}>
      <Grid item component={Card} xs={11}>
        <h2 style={{ paddingLeft: '16px' }}>
          Cases & Deaths Over Time
        </h2>
        <CardContent>
          {
            dataByDay.labels.length ? (
              <Line
                data={{
                  labels: dataByDay.labels,
                  datasets: [
                    {
                      data: dataByDay.confirmed,
                      label: 'Confirmed Cases',
                      borderColor: 'rgba(0, 0, 255, 0.5)',
                      fill: true
                    },
                    {
                      data: dataByDay.deaths,
                      label: 'Deaths',
                      borderColor: 'rgba(255, 0, 0, 0.5)',
                      backgroundColor: 'rgba(255, 0, 0, 0.5)'
                    }
                  ]
                }}
              />
            ) : null
          }
        </CardContent>
      </Grid>
    </Grid>
  )
}

DeathsOverTime.propTypes = {
  countryCode: PropTypes.string
}

export default DeathsOverTime
