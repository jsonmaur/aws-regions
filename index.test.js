const { expect } = require('chai')
const awsRegions = require('./index')
const awsJson = require('./regions.json')

describe('unit: index', () => {
  it('exports data', (done) => {
    expect(awsRegions.regions['n-virginia'].code).to.equal('us-east-1')
    done()
  })

  it('list()', (done) => {
    const data = awsRegions.list()
    expect(data).to.have.length(18)
    expect(data[0].name).to.equal('n-virginia')
    expect(data[0].code).to.equal('us-east-1')
    expect(data[0].zones).to.equal(awsRegions.regions['n-virginia'].zones)
    expect(data[4].name).to.equal('us-govcloud-west')
    done()
  })

  it('list() public', (done) => {
    const data = awsRegions.list({ public: true })
    expect(data).to.have.length(15)
    expect(data[0].name).to.equal('n-virginia')
    expect(data[4].name).to.equal('canada')
    done()
  })

  it('get() by name', (done) => {
    const data = awsRegions.get('oregon')
    expect(data.name).to.equal('oregon')
    expect(data.code).to.equal('us-west-2')
    expect(data.zones).to.equal(awsRegions.regions['oregon'].zones)
    done()
  })

  it('get() by code', (done) => {
    const data = awsRegions.get('us-west-2')
    expect(data.name).to.equal('oregon')
    expect(data.code).to.equal('us-west-2')
    expect(data.zones).to.equal(awsRegions.regions['oregon'].zones)
    done()
  })

  it('formatted json', (done) => {
    expect(awsJson['n-virginia'].code).to.equal('us-east-1')
    done()
  })

  it('uses correct zones for each region', (done) => {
    Object.keys(awsJson).forEach(key => {
      const { code, zones } = awsJson[key]
      expect(code).to.match(/[a-z]+-[a-z]+-[0-9]/)
      zones.forEach(zone => {
        expect(zone).to.match(new RegExp(`^${code}`))
      })
    })
    done()
  })
})
