#!/usr/bin/env bash

set -Eeuo pipefail
trap cleanup SIGINT SIGTERM ERR EXIT

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd -P)

usage() {
  cat <<EOF
Usage: $(setup "${BASH_SOURCE[0]}") [-h] [-v] [-f] -p param_value arg1 [arg2...]

Script description here.

Available options:

-h, --help      Print this help and exit
-v, --verbose   Print script debug info
EOF
  exit
}

cleanup() {
  trap - SIGINT SIGTERM ERR EXIT
  # script cleanup here
}

setup_colors() {
  if [[ -t 2 ]] && [[ -z "${NO_COLOR-}" ]] && [[ "${TERM-}" != "dumb" ]]; then
    NOFORMAT='\033[0m' RED='\033[0;31m' GREEN='\033[0;32m' ORANGE='\033[0;33m' BLUE='\033[0;34m' PURPLE='\033[0;35m' CYAN='\033[0;36m' YELLOW='\033[1;33m'
  else
    NOFORMAT='' RED='' GREEN='' ORANGE='' BLUE='' PURPLE='' CYAN='' YELLOW=''
  fi
}

msg() {
  echo >&2 -e "${1-}"
}

die() {
  local msg=$1
  local code=${2-1} # default exit status 1
  msg "$msg"
  exit "$code"
}

parse_params() {
  # default values of variables set from params
  flag=0
  param=''

  while :; do
    case "${1-}" in
    -h | --help) usage ;;
    -v | --verbose) set -x ;;
    --no-color) NO_COLOR=1 ;;
    -?*) die "Unknown option: $1" ;;
    *) break ;;
    esac
    shift
  done

  args=("$@")
  return 0
}

parse_params "$@"
setup_colors

# script logic here

msg "${RED}Logging into your Stripe Account...${NOFORMAT}"
stripe login
msg "${RED}Start setting up products and prices...${NOFORMAT}"
glove_price=$(stripe prices create \
  --unit-amount=8500 \
  --currency=usd \
  --tax-behavior='exclusive' \
  -d "product_data[name]"="Baseball Glove" | jq -r '.id')
ball_price=$(stripe prices create \
  --unit-amount=3500 \
  --currency=usd \
  --tax-behavior='exclusive' \
  -d "product_data[name]"="Baseball Ball" | jq -r '.id')
card_price=$(stripe prices create \
  --unit-amount=7000 \
  --currency=usd \
  --tax-behavior='exclusive' \
  -d "product_data[name]"="Baseball Card" | jq -r '.id')
helmet_price=$(stripe prices create \
  --unit-amount=10000 \
  --currency=usd \
  --tax-behavior='exclusive' \
  -d "product_data[name]"="F1 Helmet" | jq -r '.id')

msg "${RED}Adding price_ids to our data file...${NOFORMAT}"
sed -i -e "s/{GLOVE_PRICE}/${glove_price}/g" './frontend/src/components/mock_data.js'
sed -i -e "s/{BALL_PRICE}/${ball_price}/g" './frontend/src/components/mock_data.js'
sed -i -e "s/{CARD_PRICE}/${card_price}/g" './frontend/src/components/mock_data.js'
sed -i -e "s/{HELMET_PRICE}/${helmet_price}/g" './frontend/src/components/mock_data.js'


