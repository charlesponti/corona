import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

import styles from './DeathsByAgeGroup.module.css'
import theme from '../../theme.module.css'

import deathsByAgeGroup from '../../data/deaths.json'
// import { getPercentageOfDeaths } from '../../utils'

export default function DeathsByAgeGroup () {
  return (
    <Grid container justify="center" className={styles.container}>
      <Grid item component={Card} xs={11} className={theme.card}>
        <h2 style={{ paddingLeft: '16px' }}>Deaths by Age Group</h2>
        <CardContent>
          <div className={styles.data}>
            {deathsByAgeGroup.map((row) => {
              const ageGroup = row["Age group"].toLowerCase()
              return (
                <Grid container key={row["Age group"]} className={styles.ageGroup}>
                  <Grid item xs={10} sm={7}>
                    {ageGroup.replace('years', '').replace('year', '')}
                  </Grid>
                  <Grid item xs={2} sm={3} className={styles.deaths}>
                    {row["All Deaths involving COVID-19"]}
                  </Grid>
                  {/* <Grid item xs={2} sm={3}>
                    {getPercentageOfDeaths(row)}%
                  </Grid> */}
                </Grid>
            )})}
          </div>
        </CardContent>
      </Grid>
    </Grid>
  )
}

DeathsByAgeGroup.propTypes = {
  countryCode: PropTypes.string
}
