# AWS Regions

| Region Code | Region Name | Availability Zones
|-------------|------------|-------------------
| us-east-1 | N. Virginia | `us-east-1a` `us-east-1b` `us-east-1c` `us-east-1d` `us-east-1e` `us-east-1f`
| us-east-2 | Ohio | `us-east-2a` `us-east-2b` `us-east-2c`
| <sup>1</sup>us-west-1 | N. California | `us-west-1a` `us-west-1b` `us-west-1c`
| us-west-2 | Oregon | `us-west-2a` `us-west-2b` `us-west-2c` `us-west-2d`
| <sup>2</sup>us-gov-west-1 | US GovCloud West | `us-gov-west-1a` `us-gov-west-1b` `us-gov-west-1c`
| <sup>2</sup>us-gov-east-1 | US GovCloud East | `us-gov-east-1a` `us-gov-east-1b` `us-gov-east-1c`
| ca-central-1 | Canada | `ca-central-1a` `ca-central-1b`
| eu-north-1 | Stockholm | `eu-north-1a` `eu-north-1b` `eu-north-1c`
| eu-west-1 | Ireland | `eu-west-1a` `eu-west-1b` `eu-west-1c`
| eu-west-2 | London | `eu-west-2a` `eu-west-2b` `eu-west-2c`
| eu-west-3 | Paris | `eu-west-3a` `eu-west-3b` `eu-west-3c`
| eu-central-1 | Frankfurt | `eu-central-1a` `eu-central-1b` `eu-central-1c`
| <sup>1</sup>ap-northeast-1 | Tokyo | `ap-northeast-1a` `ap-northeast-1b` `ap-northeast-1c` `ap-northeast-1d`
| ap-northeast-2 | Seoul | `ap-northeast-2a` `ap-northeast-2c`
| <sup>4</sup>ap-northeast-3 | Osaka | `ap-northeast-3a`
| ap-southeast-1 | Singapore | `ap-southeast-1a` `ap-southeast-1b` `ap-southeast-1c`
| ap-southeast-2 | Sydney | `ap-southeast-2a` `ap-southeast-2b` `ap-southeast-2c`
| ap-south-1 | Mumbai | `ap-south-1a` `ap-south-1b`
| <sup>1</sup>sa-east-1 | Sao Paulo | `sa-east-1a` `sa-east-1b` `sa-east-1c`
| <sup>3</sup>cn-north-1 | Bejing | `cn-north-1a` `cn-north-1b`
| <sup>3</sup>cn-northwest-1 | Ningxia | `cn-northwest-1a` `cn-northwest-1b` `cn-northwest-1c`
| *coming soon* | Bahrain | `...`
| *coming soon* | Cape Town | `...`
| *coming soon* | Hong Kong SAR | `...`
| *coming soon* | Milan | `...`

*<sup>1</sup>To ensure that resources are distributed across the Availability Zones for these regions, they may differ for each AWS account. You can run `aws ec2 describe-availability-zones --region $REGION` to be sure which ones are available to you.*  
*<sup>2</sup>The [US GovCloud](https://aws.amazon.com/govcloud-us/) region is only available to official U.S. government agencies and organizations.*  
*<sup>3</sup>The China regions are only available to [AWS in China](https://www.amazonaws.cn) accounts.*  
*<sup>4</sup>Only available in the local region*

## Javascript API

```bash
$ npm install aws-regions
```

#### .list(options: Object)

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

#### .lookup(options: Object)

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

## Raw Data

You can download a JSON file with all the region data [here](https://raw.githubusercontent.com/jsonmaur/aws-regions/master/regions.json).

## License

[MIT](license) © [Jason Maurer](http://maur.co)
