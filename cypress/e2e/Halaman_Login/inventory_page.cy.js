import LoginPage from '../../support/objectModel/LoginPage';




describe('Halaman Inventory', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    loginPage.login('standard_user', 'secret_sauce');
  });

  it('Menampilkan daftar produk setelah login', () => {
    cy.url().should('include', '/inventory.html');

    // Cek apakah daftar produk tampil
    cy.get('.inventory_item').should('have.length.at.least', 1);
  });

  it('Cek informasi produk pertama', () => {
    cy.get('.inventory_item').first().within(() => {
      cy.get('.inventory_item_name').should('be.visible');
      cy.get('.inventory_item_price').should('be.visible');
      cy.get('button').contains(/add to cart/i).should('be.visible');
    });
  });

  it('Tambah produk ke keranjang', () => {
    cy.get('.inventory_item').first().find('button').click();

    // Cek ikon keranjang bertambah
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  it('Navigasi ke keranjang', () => {
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
  });
});
