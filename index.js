const regions = require('./regions.json')

function list (opts = {}) {
	return Object.keys(regions)
		.map((region) => {
			if (opts.public && !regions[region].public) {
				return
			}

			return Object.assign({}, {
				name: region
			}, regions[region])
		})
		.filter(Boolean)
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
