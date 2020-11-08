/* global __dirname */
// Data from: https://www.cdc.gov/nchs/nvss/vsrr/covid_weekly/index.htm

const fs = require('fs')
const path = require('path')
const csv = require('csvtojson');

(async () => {
  const csvFilePath = path.resolve(__dirname, './deaths-20-11-04.csv')
  const deaths = await csv().fromFile(csvFilePath)
  fs.writeFileSync(path.resolve(__dirname, './deaths.json'), JSON.stringify(deaths))
})()
