#!/bin/bash

cp regions.json javascript/regions.json

cat > go/regions/data.go <<EOF
/**
 * This file is auto-generated from aws-regions/regions.sh
 */
package regions

const REGION_DATA string = \`$(cat regions.json)\`
EOF
