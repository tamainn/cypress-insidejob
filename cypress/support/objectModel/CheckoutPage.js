class CheckoutPage {
  isiDataCheckout(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
  }

  selesaiCheckout() {
    cy.get('[data-test="finish"]').click();
  }

  validasiBerhasil() {
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
  }
}

export default CheckoutPage;
