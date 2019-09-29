const { expect } = require('chai')
const awsRegions = require('./index')
const awsJson = require('./regions.json')

describe('unit: index', () => {
	it('list()', async () => {
		const data = awsRegions.list()
		expect(data).to.have.length(awsJson.length)
		expect(data[0]).to.deep.equal(awsJson[0])
	})

	it('list() public', async () => {
		const data = awsRegions.list({ public: true })
		expect(data).to.have.length(18)
	})

	it('lookup() by name', async () => {
		const data = awsRegions.lookup({ name: 'Ohio' })
		expect(data).to.deep.equal(awsJson[1])
	})

	it('get() by name deprecated', async () => {
		const data = awsRegions.get('Ohio')
		expect(data).to.deep.equal(awsJson[1])
	})

	it('lookup() by code', async () => {
		const data = awsRegions.lookup({ code: 'us-east-2' })
		expect(data).to.deep.equal(awsJson[1])
	})

	it('get() by code deprecated', async () => {
		const data = awsRegions.get('us-east-2')
		expect(data).to.deep.equal(awsJson[1])
	})

	it('formatted json', async () => {
		expect(awsJson[0].code).to.equal('us-east-1')
	})

	it('uses correct name for each region', async () => {
		awsJson.forEach(region => {
			expect(region.full_name).to.include(region.name.split(" ")[0])
		})
	})

	it('uses correct zones for each region', async () => {
		awsJson.forEach(region => {
			expect(region.code).to.match(/[a-z]+-[a-z]+-[0-9]/)
			region.zones.forEach(zone => {
				expect(zone).to.match(new RegExp(`^${region.code}`))
			})
		})
	})
})
