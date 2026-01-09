import { defineConfig } from '@playwright/test';

export default defineConfig({
  // ... autres configs
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    trace: 'on-first-retry',
  },
});