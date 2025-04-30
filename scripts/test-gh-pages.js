#!/usr/bin/env node

/**
 * This script builds the project with the GitHub Pages base path
 * and then serves it locally for testing.
 */

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

// The base path to use (should match your repository name)
const BASE_PATH = '/';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m'
};

console.log(`${colors.bright}${colors.blue}Building project with base path: ${BASE_PATH}${colors.reset}`);

try {
  // Build the project with the base path
  execSync(`npm run build -- --base=${BASE_PATH}`, { stdio: 'inherit' });

  console.log(`\n${colors.bright}${colors.green}Build successful!${colors.reset}`);
  console.log(`${colors.bright}${colors.yellow}Starting preview server...${colors.reset}`);

  // Start the preview server
  console.log(`\n${colors.magenta}Your app is now available at: http://localhost:4173${colors.reset}`);
  console.log(`${colors.magenta}The base path ${BASE_PATH} is being simulated${colors.reset}\n`);

  execSync('npm run preview', { stdio: 'inherit' });
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
