import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import  { DeathsByAgeGroup } from './components/DeathsByAgeGroup'
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
        <Cards countryCode={countryCode} />
        {countryCode === 'USA' ? <DeathsByAgeGroup/> : null}
        <Chart countryCode={countryCode} />
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
