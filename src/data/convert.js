const fs = require('fs')
const path = require('path')
const csv = require('csvtojson');

(async () => {
  const csvFilePath = path.resolve(__dirname, './deaths.csv')
  const deaths = await csv().fromFile(csvFilePath)
  fs.writeFileSync(path.resolve(__dirname, './deaths.json'), JSON.stringify(deaths))
})()
