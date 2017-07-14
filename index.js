const regions = require('./regions.json')

function list () {
  return Object.keys(regions)
    .map((region) => {
      return Object.assign({}, {
        name: region
      }, regions[region])
    })
}

function get (nameOrCode) {
  const isCode = nameOrCode.match(/[0-9]$/)

  return list().find((region) => {
    const key = isCode ? 'code' : 'name'
    return region[key] === nameOrCode
  })
}

module.exports = {
  regions: regions,
  list: list,
  get: get
}
