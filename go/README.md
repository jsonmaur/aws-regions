# AWS Regions - Go

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
