#!/bin/bash

cp regions.json js/regions.json

cat > v2/data.go <<EOF
/**
 * This file is auto-generated from aws-regions/regions.sh
 */
package regions

const REGION_DATA string = \`$(cat regions.json)\`
EOF
