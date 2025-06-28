// cypress/support/objectModel/LoginPage.js

class LoginPage {
  visit() {
    cy.visit('/login'); // ganti sesuai URL login-mu
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').type(password);
  }

  submit() {
    cy.get('[data-test="login-button"]').click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

export default LoginPage;