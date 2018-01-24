#!/bin/bash

set -e

echo "Change dir ./assets"
cd assets

yarn test
yarn lint

echo "Change dir root"
cd ..

echo "$(tput setaf 2)Success"
