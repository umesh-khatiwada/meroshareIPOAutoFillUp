const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
