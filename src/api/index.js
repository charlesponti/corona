import axios from 'axios'

const baseUrl = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(baseUrl)

    return {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate
    }
  } catch (err) {
    console.log(err)
  }
}

/**
 *
 * @param {string} countryCode ISO3 code for country
 * @returns {Promise<{}>}
 */
export const fetchCountryData = async (countryCode) => {
  try {
    const { data } = await axios.get(`${baseUrl}/countries/${countryCode}`)
    const { confirmed, lastUpdate, deaths, recovered } = data
    return {
      lastUpdate,
      confirmed: confirmed.value,
      deaths: deaths.value,
      recovered: recovered.value
    }
  } catch (error) {
    console.error(error)
  }
}

export const getCountries = async () => {
  try {
    const response = await axios.get(`${baseUrl}/countries`)
    /**
     * @type {{ iso3: string, name: string }[]}
     */
    const countries = response.data.countries
    return countries
  } catch (err) {
    console.log(err)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/daily`)
    return data.map(({ confirmed, reportDate, deaths }) => ({
      date: reportDate,
      confirmed: confirmed.total,
      deaths: deaths.total
    }))
  } catch (error) {
    console.log(error)
  }
}

const url = 'https://api.covid19api.com'

export const fetchTotalCountryData = async ({ countrySlug }) => {
  try {
    /**
      * @type {{ data: Array }}
      */
    const { data } = await axios.get(`${url}/country/${countrySlug}?from=2020-04-20T00:00:00Z&to=2020-04-21T00:00:00Z`)
    return data.sort((a, b) => a - b).splice(0, 10).map(({ Province, Confirmed, Recovered, Deaths, Date: date }) => ({
      confirmed: Confirmed,
      deaths: Deaths,
      recovered: Recovered,
      date,
      label: Province
    }))
  } catch (error) {
    console.error(error)
  }
}

/**
 *
 * @param {string} countryCode ISO3 code for country
 * @returns {Promise<{}>}
 */
export const fetchCountryConfirmedData = async (countryCode) => {
  try {
    /**
     * @type {{ data: Array }}
     */
    const { data } = await axios.get(
      `${baseUrl}/countries/${countryCode}/confirmed`
    )

    return data
      .splice(0, 10)
      .map(({ confirmed, deaths, lastUpdate, combinedKey }) => ({
        confirmed,
        deaths,
        date: lastUpdate,
        label: combinedKey
      }))
  } catch (error) {
    console.error(error)
  }
}
