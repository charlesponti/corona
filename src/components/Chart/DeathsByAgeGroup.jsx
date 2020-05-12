import React from 'react'
import PropTypes from 'prop-types'
import { Grid, CardContent, Typography, Card } from '@material-ui/core'
import cx from 'classnames'
import styles from './DeathsByAgeGroup.module.css'

import deaths from '../../data/deaths.json'
import { Bar } from 'react-chartjs-2'

export default function DeathsByAgeGroup () {
  return (
    <Grid container justify="center" className={cx(styles.container)}>
      <Grid item component={Card} xs={10}>
        <CardContent>
          <Typography variant="body2">
            <Bar
              data={{
                labels: deaths.map(d => d['Age group']),
                datasets: [
                  {
                    data: deaths.map(d => parseInt(d['COVID-19 Deaths'].replace(',', ''))),
                    label: 'COVID-19 Deaths',
                    borderColor: 'rgba(0, 0, 255, 0.5)',
                    fill: true
                  }
                ]
              }}
            />
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  )
}

DeathsByAgeGroup.propTypes = {
  countryCode: PropTypes.string
}
