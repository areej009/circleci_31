const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl: 'http://localhost:3000',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
