import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styles from './DeathByRegion.module.css'
import theme from '../theme.module.css'

import { fetchCountryRegionalData } from '../api'

/**
 * 
 * @param {{ data: [{ label: string, confirmed: number, deaths: number }]}} props 
 */
function DeathByRegion({ countryCode }) {
    const [dataByRegion, setCountryData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setCountryData(await fetchCountryRegionalData(countryCode))
        }

        fetchApi()
    }, [countryCode])

    return dataByRegion.length > 1 ? (
        <Grid container justify="center" className={styles.container}>
            <Grid item component={Card} xs={11} className={theme.card}>
                <h2 style={{ paddingLeft: '16px', marginBottom: 0 }}>
                Cases & Deaths By Region
                </h2>
                <CardContent>
                    {dataByRegion.map(row => (
                        <Grid container justify="center" alignItems="center" key={row.uid} className={styles.row}>
                            <Grid item xs={12} sm={7} className={styles.label}>
                                {row.county} <span style={{ fontSize: '12px' }}><i>{row.state}</i></span>
                            </Grid>
                            <Grid item xs={12} sm={3} className={styles.stat}>
                                {row.confirmed} confirmed
                            </Grid>
                            <Grid item xs={12} sm={2} className={styles.stat}>
                                {row.deaths} deaths
                            </Grid>
                        </Grid>
                    ))}
                </CardContent>
            </Grid>
        </Grid>
    ) : null
}

DeathByRegion.propTypes = {
    countryCode: PropTypes.string
}

export default DeathByRegion