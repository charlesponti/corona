import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { NativeSelect, Grid } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

import { getCountries } from '../../api'

const CountryPicker = ({ onChange }) => {
  const [countryData, setData] = useState([])

  useEffect(() => {
    (async () => setData(await getCountries()))()
  }, [setData])

  return (
    <Grid container justify="center">
      <Grid item xs={11} md={3} component={FormControl}>
        <InputLabel>Country</InputLabel>
        <NativeSelect onChange={(event) => onChange(event.target.value)}>
          <option value="global">All</option>
          {countryData.map((country) => (
            <option key={country.name} value={country.iso3}>
              {country.name}
            </option>
          ))}
        </NativeSelect>
      </Grid>
    </Grid>
  )
}

CountryPicker.propTypes = {
  onChange: PropTypes.func
}

export default CountryPicker
