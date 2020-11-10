import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { TopStats } from './components/Cards'
import { CountryPicker } from './components/CountryPicker'
// import { DeathsOverTime } from './components/DeathsOverTime'
import DeathByRegion from './components/DeathByRegion'
import  { DeathsByAgeGroup } from './components/DeathsByAgeGroup'

import styles from './App.module.css'
import covidLogo from './covid.png'


class App extends React.Component {
  state = {
    countryCode: 'USA'
  };

  /**
   *
   * @param {string} countryCode
   */
  onCountryChange (countryCode) {
    this.setState({ countryCode })
  }

  render () {
    const { countryCode } = this.state

    return (
      <div className={styles.container}>
        <Typography variant="h3" xs={5} className={styles.siteTitle}>
          <img src={covidLogo} alt="COVID 19" className={styles.logo} />
        </Typography>
        <CountryPicker onChange={this.onCountryChange.bind(this)} countryCode={countryCode} />
        <TopStats countryCode={countryCode} />
        {countryCode === 'USA' ? <DeathsByAgeGroup/> : null}
        {/* <DeathsOverTime countryCode={countryCode} /> */}
        {countryCode !== 'global' ? <DeathByRegion countryCode={countryCode} /> : null}
        <Typography className={styles.footer}>
          Made by 
          <Link rel="noopener noreferrer" target="_blank" href="https://ponti.io">
            @thecharlesponti
          </Link>
        </Typography>
      </div>
    )
  }
}

export default App
