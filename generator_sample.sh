#!/bin/bash

echo "var proxy = \"PROXY 192.168.8.3:3128; DIRECT;\";" > wpad.pac
cat source.pac >> wpad.pac