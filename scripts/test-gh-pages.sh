#!/bin/bash

# Colors for console output
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
MAGENTA='\033[0;35m'
RESET='\033[0m'
BOLD='\033[1m'

# The base path to use (should match your repository name)
BASE_PATH="/harp-melody-web/"

echo -e "${BOLD}${BLUE}Building project with base path: ${BASE_PATH}${RESET}"

# Build the project with the base path
npm run build -- --base=${BASE_PATH}

if [ $? -eq 0 ]; then
  echo -e "\n${BOLD}${GREEN}Build successful!${RESET}"
  echo -e "${BOLD}${YELLOW}Starting preview server...${RESET}"
  
  # Start the preview server
  echo -e "\n${MAGENTA}Your app is now available at: http://localhost:4173${RESET}"
  echo -e "${MAGENTA}The base path ${BASE_PATH} is being simulated${RESET}\n"
  
  npm run preview
else
  echo -e "${BOLD}${RED}Build failed!${RESET}"
  exit 1
fi
