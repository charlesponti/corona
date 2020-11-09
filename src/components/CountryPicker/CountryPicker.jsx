import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { NativeSelect, Grid } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

import styles from './CountryPicker.module.css'
import { getCountries } from '../../api'

const CountryPicker = ({ onChange, countryCode }) => {
  const [countryData, setData] = useState([])

  useEffect(() => {
    (async () => setData(await getCountries()))()
  }, [setData])

  return (
    <Grid container justify="center" className={cx(styles.container)}>
      <Grid item xs={10}>
        <FormControl className={styles.formControl}>
          <InputLabel className={styles.label}>Country</InputLabel>
          <NativeSelect onChange={(event) => onChange(event.target.value)} value={countryCode} className={styles.select}>
            <option value="global">All</option>
            {countryData.map((country) => (
              <option key={country.name} value={country.iso3}>
                {country.name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Grid>
    </Grid>
  )
}

CountryPicker.propTypes = {
  onChange: PropTypes.func,
  countryCode: PropTypes.string
}

export default CountryPicker
