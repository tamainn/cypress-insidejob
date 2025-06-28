// cypress/e2e/login.page.cy.js

describe('Login Page with Fixtures', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.fixture('loginData').as('loginData');
  });

  it('Login dengan data dari fixture', function () {
    cy.login(this.loginData.validUser.username, this.loginData.validUser.password);
    cy.url().should('include', '/inventory.html');
  });
});
