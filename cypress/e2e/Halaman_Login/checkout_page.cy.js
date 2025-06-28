describe('Checkout sampai selesai', () => {
  it('User login, pilih produk, dan checkout sukses', () => {
    // Login
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Tambah produk
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Buka keranjang
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 2);

    // Checkout
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Budi');
    cy.get('[data-test="lastName"]').type('Testing');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // Finish
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
  });
});
