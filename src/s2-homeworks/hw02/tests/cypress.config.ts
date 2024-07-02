import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://evgeniya1307.github.io/home-tasks2',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
