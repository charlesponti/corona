import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import cx from 'classnames'
import styles from './Cards.module.css'

import { fetchData, fetchCountryData } from '../../api'
import ConfirmedCases from './ConfirmedCases'
import Deaths from './Deaths'
import Recovered from './Recovered'

/**
 *
 * @param {{ countryCode: string }} props
 */
export default function Cards ({ countryCode }) {
  /**
   * @type [{ deaths: number, confirmed: number }, Function]
   */
  const [data, setData] = useState({})

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

  return data.confirmed ? (
    <Grid container justify="center" className={cx(styles.container)}>
      <Grid item xs={12} md={3} component={ConfirmedCases} {...data} />
      <Grid item xs={12} md={3} component={Recovered} {...data} />
      <Grid item xs={12} md={3} component={Deaths} {...data} />
    </Grid>
  ) : null
}

Cards.propTypes = {
  countryCode: PropTypes.string
}
