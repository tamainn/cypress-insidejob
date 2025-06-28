const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hr87jq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
