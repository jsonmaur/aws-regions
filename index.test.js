const { expect } = require('chai')
const regions = require('./index')

describe('unit: index', () => {
  it('exports data', (done) => {
    expect(Object.keys(regions)).to.have.length(16)
    done()
  })

  it('uses correct zones', (done) => {
    Object.keys(regions).forEach(key => {
      const { code, zones } = regions[key]
      expect(code).to.match(/[a-z]+-[a-z]+-[0-9]/)
      zones.forEach(zone => {
        expect(zone).to.match(new RegExp(`^${code}`))
      })
    })
    done()
  })
})
