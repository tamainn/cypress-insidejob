import LoginPage from "../../support/objectModel/LoginPage";



describe('Login Page Test', () => {
  it('Login with valid credentials', () => {
    const loginPage = new LoginPage();

    cy.visit('/');
    loginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });
});
