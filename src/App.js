import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import img from './covid.png'

class App extends React.Component {
  state = {
    countryCode: 'global'
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
        <Typography variant="h1" xs={5} className={styles.siteTitle}>
          <img src={img} alt="COVID-19 Tracker" className={styles.covidImg}/>
        </Typography>
        <CountryPicker onChange={this.onCountryChange.bind(this)} />
        <Cards countryCode={countryCode} />
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
