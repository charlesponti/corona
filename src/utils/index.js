export function toNumber(string) {
    return Number(string.replace(/,/ig, ''))
}
  
export function getPercentageOfDeaths(row) {
    return (toNumber(row["All Deaths involving COVID-19"]) / toNumber(row["Population"]) * 100).toFixed(2)
}