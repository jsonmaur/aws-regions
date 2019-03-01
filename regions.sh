#!/bin/bash

cp regions.json javascript/regions.json

cat > go/regions/data.go <<EOF
package regions
const REGION_DATA string = \`$(cat regions.json)\`
EOF
