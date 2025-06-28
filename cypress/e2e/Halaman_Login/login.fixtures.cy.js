describe('Login menggunakan data dari fixture', () => {
  beforeEach(function () {
    cy.fixture('loginData').as('user'); // alias jadi this.user
    cy.visit('https://www.saucedemo.com/');
  });

  it('User berhasil login dengan data valid dari fixture', function () {
    cy.get('[data-test="username"]').type(this.user.validUser.username);
    cy.get('[data-test="password"]').type(this.user.validUser.password);
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
  });
});
