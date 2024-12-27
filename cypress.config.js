const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // Specify the reporter
  reporterOptions: {
    reportDir: "cypress/reports", // Directory where reports will be saved
    overwrite: true, // Do not overwrite existing reports
    html: true, // Generate an HTML report
    json: true, // Generate a JSON report
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Include the mochawesome reporter plugin
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
