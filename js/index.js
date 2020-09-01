const regions = require('./regions.json')

function list (opts = {}) {
	return regions.filter((region) => {
		if (opts.public && !region.public) {
			return false
		}

		return true
	})
}

function lookup (opts = {}) {
	if (opts.code) {
		return regions.find(r => r.code === opts.code)
	}
	
	if (opts.name) {
		return regions.find(r => r.name === opts.name)
	}
}

function get (nameOrCode) {
	console.warn(".get() method is deprecated! Use .lookup({ code: '' }) or .lookup({ name: '' }) instead.")
	
	return nameOrCode.match(/[0-9]$/)
		? lookup({ code: nameOrCode })
		: lookup({ name: nameOrCode })
}

module.exports = {
	list,
	lookup,
	get,
}
