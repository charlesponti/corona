import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import DeathsByAgeGroup from './components/Chart/DeathsByAgeGroup'

class App extends React.Component {
  state = {
    countryCode: 'USA'
  };

  async componentDidMount () {}

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
          COVID-19
        </Typography>
        <CountryPicker onChange={this.onCountryChange.bind(this)} countryCode={countryCode} />
        <Cards countryCode={countryCode} />
        {countryCode === 'USA' ? <DeathsByAgeGroup/> : null}
        <Chart countryCode={countryCode} />
        <Typography className={styles.footer}>
          Made by <Link rel="noopener noreferrer" target="_blank" href="https://ponti.io" onClick={() => console.log('clicked website')}>
             @thecharlesponti</Link>
        </Typography>
      </div>
    )
  }
}

export default App
