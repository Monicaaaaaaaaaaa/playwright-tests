// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  timeout: 60000,
  retries: 1,
  workers: 2,

  use: {
    headless: true,
    trace: 'on-first-retry',
  },

  fullyParallel: true,

  reporter: [
    ['html'],
    ['./reporters/customReporter.js']
  ],

  projects: [

    {
      name: 'global',
      testMatch: /.*\.setup\.js/,

      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
        storageState: 'storageState.json',
      },

      dependencies: ['global'],
    },

  ],
});