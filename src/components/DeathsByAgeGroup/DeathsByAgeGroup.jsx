import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

import styles from './DeathsByAgeGroup.module.css'

import deathsByAgeGroup from '../../data/deaths.json'

function toNumber(string) {
  return Number(string.replace(/,/ig, ''))
}

function getPercentageOfDeaths(row) {
  return (toNumber(row["All Deaths involving COVID-19"]) / toNumber(row["Deaths from All Causes"]) * 100).toFixed(2)
}

export default function DeathsByAgeGroup () {
  return (
    <Grid container justify="center" className={styles.container}>
      <Grid item component={Card} xs={11}>
        <h2 style={{ paddingLeft: '16px' }}>% of All Deaths by Age Group</h2>
        <CardContent>
          <div className={styles.data}>
            {deathsByAgeGroup.map((row) => {
              const ageGroup = row["Age group"].toLowerCase()
              return (
                <Grid container key={row["Age group"]}>
                  <Grid item xs={8} sm={3}>
                    {ageGroup.replace('years', '').replace('year', '')}
                  </Grid>
                  <Grid item xs={2} sm={3}>
                    {getPercentageOfDeaths(row)}%
                  </Grid>
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
