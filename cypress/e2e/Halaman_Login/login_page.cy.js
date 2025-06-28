describe('Login Page with Fixtures', () => {
  it('Login dengan data dari fixture', () => {
    cy.visit('/');
    cy.login('standard_user', 'secret_sauce'); // custom command
    cy.url().should('include', '/inventory.html');
  });
});
