import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

import styles from './DeathsByAgeGroup.module.css'

import deathsByAgeGroup from '../../data/deaths.json'
import { CardHeader } from '@material-ui/core'

function toNumber(string) {
  return Number(string.replace(/,/ig, ''))
}

function getPercentageOfDeaths(row) {
  return (toNumber(row["All Deaths involving COVID-19"]) / toNumber(row["Deaths from All Causes"]) * 100).toFixed(2)
}

export default function DeathsByAgeGroup () {
  return (
    <Grid container className={styles.container}>
      <Grid item component={Card} xs={12}>
        <CardContent>
          <CardHeader title="% of All Deaths"/>
          <Grid container>
            {deathsByAgeGroup.map((row) => {
              const ageGroup = row["Age group"].toLowerCase()
              return (
                <Grid container justify="center" key={row["Age group"]}>
                  <Grid item xs={6} sm={3}>
                    {ageGroup}
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    {getPercentageOfDeaths(row)}%
                  </Grid>
                </Grid>
            )})}
          </Grid>
        </CardContent>
      </Grid>
    </Grid>
  )
}

DeathsByAgeGroup.propTypes = {
  countryCode: PropTypes.string
}
