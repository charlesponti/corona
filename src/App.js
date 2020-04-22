import React from 'react'
import { Typography } from '@material-ui/core'
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
        <Typography variant="h1" xs={5} gutterBottom className={styles.siteTitle}>
          <img src={img} className={styles.covidImg}/>
        </Typography>
        <CountryPicker onChange={this.onCountryChange.bind(this)} />
        <Cards countryCode={countryCode} />
        <Chart countryCode={countryCode} />
      </div>
    )
  }
}

export default App
