import Grid from '@material-ui/core/Grid'
import React from 'react'
import styles from './DeathByRegion.module.css'

/**
 * 
 * @param {[{ label: string, confirmed: number, deaths: number }]} data 
 */
function DeathByRegion({ data  }) {
    return data.map(row => (
        <Grid container justify="center" alignItems="center" key={row.label} className={styles.row}>
            <Grid item xs={12} sm={7} className={styles.label}>
                {row.label.split(', ').splice(0,2).map(r => <div key={r}>{r}</div>)}
            </Grid>
            <Grid item xs={12} sm={3} className={styles.stat}>
                {row.confirmed} confirmed
            </Grid>
            <Grid item xs={12} sm={2} className={styles.stat}>
                {row.deaths} deaths
            </Grid>
        </Grid>
    ))
}

export default DeathByRegion