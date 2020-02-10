#!/bin/sh

curl -s -X POST -d locate="$1" \
        -d geoit="JSON" \
        https://geocode.xyz | jq '.'


