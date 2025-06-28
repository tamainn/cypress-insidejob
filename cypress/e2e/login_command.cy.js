import LoginPage from "../support/objectModel/LoginPage";

describe('Fitur Login', () => {
  const loginPage = new LoginPage(); 

  it('User Berhasil Login', () => {
    
    cy.visit('https://www.saucedemo.com/');

    
    loginPage.login('standard_user', 'secret_sauce');

   
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products'); 
  });
});
