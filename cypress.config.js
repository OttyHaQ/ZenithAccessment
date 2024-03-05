const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.zenithbank.com/",
    defaultCommandTimeout: 60000,
    watchForFileChanges: false,
    pageLoadTimeout: 120000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //on('task', {downloadFile})
    },
  },
});
