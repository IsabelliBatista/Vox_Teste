const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      urlBase: 'https://www.saucedemo.com/v1/',
      login: 'standard_user',
      pwd: 'secret_sauce'
    }
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/output.xml',
    toConsole: 'false'
  }
});
