# AWS Regions - Javascript

## Usage

```bash
$ npm install aws-regions
```

### .list(options: Object)

Returns all the regions.

```javascript
const awsRegions = require('aws-regions')

awsRegions.list() ===
	[
		{
			name: 'N. Virginia',
			full_name: 'US East (N. Virginia)',
			code: 'us-east-1',
			public: true,
			zones: [
				'us-east-1a',
				// ...
			],
		},
		// ...
	]
```

- `options`
	- `public` If true, will only return regions publicly available with a regular AWS account. Defaults to `false`.

### .lookup(options: Object)

Finds a region by the name or the code.

```javascript
const awsRegions = require('aws-regions')

awsRegions.lookup({ code: 'us-east-1' }) ===
	{
		name: 'N. Virginia',
		full_name: 'US East (N. Virginia)',
		code: 'us-east-1',
		public: true,
		zones: [
			'us-east-1a',
			// ...
		],
	}
```

- `options`
	- `code` Lookup a region by its code (e.g. `us-east-1`).
	- `name` Lookup a region by its name (e.g. `N. Virginia`).


## Zone Limit

If a region's data object includes `zone_limit: int`, that means AWS accounts are limited to this number of availability zones (which will differ based on when your account was created.) You'll need to get your specific availability zones for this region with the AWS API or CLI.

## [Regions List](../readme.md)

