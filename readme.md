![AWS Global Infrastructure](https://d1.awsstatic.com/what-is-aws/2019%20Infra%20Map%20-%20PDX.7f48f37bcd0d5df0b757eb646b844081f03d488c.png)

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
| ap-northeast-2 | Seoul | `ap-northeast-2a` `ap-northeast-2b` `ap-northeast-2c`
| <sup>4</sup>ap-northeast-3 | Osaka | `ap-northeast-3a`
| ap-southeast-1 | Singapore | `ap-southeast-1a` `ap-southeast-1b` `ap-southeast-1c`
| ap-southeast-2 | Sydney | `ap-southeast-2a` `ap-southeast-2b` `ap-southeast-2c`
| ap-south-1 | Mumbai | `ap-south-1a` `ap-south-1b` `ap-south-1c`
| <sup>1</sup>sa-east-1 | Sao Paulo | `sa-east-1a` `sa-east-1b` `sa-east-1c`
| <sup>3</sup>cn-north-1 | Bejing | `cn-north-1a` `cn-north-1b`
| <sup>3</sup>cn-northwest-1 | Ningxia | `cn-northwest-1a` `cn-northwest-1b` `cn-northwest-1c`
| ap-east-1 | Hong Kong | `ap-east-1a` `ap-east-1b` `ap-east-1c`
| *coming soon* | Bahrain | `...`
| *coming soon* | Cape Town | `...`
| *coming soon* | Milan | `...`
| *coming soon* | Jakarta | `...`

*<sup>1</sup>To ensure that resources are distributed across the Availability Zones for these regions, they may differ for each AWS account. You can run `aws ec2 describe-availability-zones --region $REGION` to be sure which ones are available to you.*  
*<sup>2</sup>The [US GovCloud](https://aws.amazon.com/govcloud-us/) regions are only available to official U.S. government agencies and organizations.*  
*<sup>3</sup>The China regions are only available to [AWS in China](https://www.amazonaws.cn) accounts.*  
*<sup>4</sup>Only available in the local region*

## Libraries [![Build Status](https://travis-ci.org/jsonmaur/aws-regions.svg?branch=master)](https://travis-ci.org/jsonmaur/aws-regions)

- **[Go](go)**
- **[Javascript](javascript)**

## Raw Data

You can download a JSON file with all the region data [here](https://raw.githubusercontent.com/jsonmaur/aws-regions/master/regions.json).

## Development

Run `./regions.sh` to auto-generate data files for each SDK when the data in `regions.json` changes.

## License

[MIT](license) © [Jason Maurer](http://maur.co)
