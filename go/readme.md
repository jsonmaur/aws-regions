# AWS Regions - Go

[See Regions List](../readme.md)

## Usage

```go
package main

import (
	"github.com/jsonmaur/aws-regions/go/regions"
)

func main() {
	regions.List()
	regions.ListPublic()
	regions.LookupByCode("us-east-2")
	regions.LookupByName("Ohio")
}
```

## Zone Limit

If a region's data object includes `ZoneLimit: int`, that means AWS accounts are limited to this number of availability zones (which will differ based on when your account was created.) You'll need to get your specific availability zones for this region with the AWS API or CLI.
