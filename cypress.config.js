const { defineConfig } = require("cypress");
// import { defineConfig } from 'cypress'

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
