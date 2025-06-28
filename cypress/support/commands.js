// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});
// cypress/support/e2e.js
import './commands';
console.log(' Custom commands loaded');
