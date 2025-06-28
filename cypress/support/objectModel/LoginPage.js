class LoginPage {
  // Selector
  KolomUsername = '[data-test="username"]';
  KolomPassword = '[data-test="password"]';
  tombolLogin   = '[data-test="login-button"]';

  // Method login
  login(username, password) {
    cy.get(this.KolomUsername).type(username);
    cy.get(this.KolomPassword).type(password);
    cy.get(this.tombolLogin).click();
  }
}

export default LoginPage;

