#!/usr/bin/env sh

set -e

npm run build

cp -r ./dist/ ../clearives.github.io

rm -rf ./dist




