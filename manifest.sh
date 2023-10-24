#!/bin/bash

set -e

if [[ -z "$1" ]] 
then	
	echo "Supply the URL of the Skyward instance."
	exit 1
fi

sed "s/YOUR_URL_GOES_HERE/$1/g" manifest.json.template > manifest.json

echo "manifest.json generated."


