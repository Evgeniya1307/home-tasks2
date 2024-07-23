import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/home-tasks2', // Убедитесь, что здесь правильный URL вашего локального сервера
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
