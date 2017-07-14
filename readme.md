# AWS Regions

| Region Code        | Region Name       | Availability Zones
---------------------|-------------------|--------------------------------------------------------
| us-east-1*         | N. Virginia       | `us-east-1a` `us-east-1b` `us-east-1c` `us-east-1d` `us-east-1e`
| us-east-2          | Ohio              | `us-east-2a` `us-east-2b` `us-east-2c`
| us-west-1*         | N. California     | `us-west-1a` `us-west-1b` `us-west-1c`
| us-west-2	         | Oregon	           | `us-west-2a` `us-west-2b` `us-west-2c`
| us-gov-west-1**    | US GovCloud       | `us-gov-west-1a` `us-gov-west-1b`
| ca-central-1       | Canada            | `ca-central-1a` `ca-central-1b`
| eu-west-1	         | Ireland	         | `eu-west-1a` `eu-west-1b` `eu-west-1c`
| eu-west-2          | London            | `eu-west-2a` `eu-west-2b`
| eu-central-1	     | Frankfurt	       | `eu-central-1a` `eu-central-1b`
| ap-northeast-1*    | Tokyo	           | `ap-northeast-1a` `ap-northeast-1b` `ap-northeast-1c`
| ap-northeast-2     | Seoul             | `ap-northeast-2a` `ap-northeast-2c`
| ap-southeast-1	   | Singapore	       | `ap-southeast-1a` `ap-southeast-1b`
| ap-southeast-2	   | Sydney	           | `ap-southeast-2a` `ap-southeast-2b` `ap-southeast-2c`
| ap-south-1         | Mumbai            | `ap-south-1a` `ap-south-1b`
| sa-east-1	         | Sao Paulo	       | `sa-east-1a` `sa-east-1b` `sa-east-1c`
| cn-north-1***      | Bejing            | `cn-north-1a` `cn-north-1b`
| *coming soon*      | Hong Kong         | `...`
| *coming soon*      | Paris             | `...`
| *coming soon*      | Stockholm         | `...`
| *coming soon*      | Ningxia           | `...`

\* *To ensure that resources are distributed across the Availability Zones for these regions, they may differ for each AWS account. You can run `aws ec2 describe-availability-zones --region $REGION` to be sure which ones are available to you.*

\*\* *The [US GovCloud](https://aws.amazon.com/govcloud-us/) region is only available to official U.S. government agencies and organizations.*

\*\*\* *The China regions are only available to [AWS in China](https://www.amazonaws.cn) accounts.*

## Javascript API

```bash
$ npm install aws-regions
```

```javascript
const awsRegions = require('aws-regions')
```

##### .list()

Returns all the regions in a list format.

```javascript
awsRegions.list()
```

```javascript
[
  {
    name: 'n-virginia',
    code: 'us-east-1',
    zones: ['...']
  },
  // ...
]
```

##### .get(String)

Finds a region by the name or the code.

```javascript
awsRegions.get('n-virginia')
/* or */
awsRegions.get('us-east-1')
```

```javascript
{
  name: 'n-virginia',
  code: 'us-east-1',
  zones: ['...']
}
```

##### .regions

The raw region data object.

```javascript
{
  'n-virginia': {
    code: 'us-east-1',
    zones: ['us-east-1a', '...']
  },
  // ...
}
```

## Raw Data

You can download a JSON file with all the region data [here](https://raw.githubusercontent.com/jsonmaur/aws-regions/master/regions.json).

## License

[MIT](license) © [Jason Maurer](http://maur.co)
