import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://evgeniya1307.github.io/home-tasks2', // Убедитесь, что URL верный
    setupNodeEvents(on, config) {
      // Здесь можно настроить события Node
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Путь к тестам
  },
});
