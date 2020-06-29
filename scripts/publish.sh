#!/bin/bash

# Push from local to remote...
# run from the scripts directory...
# dry run test:   --dry-run

LOCAL="/home/fils/src/javascript/geocomponents.github.io/web/"
REMOTE="/mnt/dvol/WebVolumes/geocomponents"

rsync  -avzhe ssh $LOCAL fils@chronos.org:$REMOTE
