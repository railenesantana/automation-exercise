
Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login');

  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(senha);
  cy.get('[data-qa="login-button"]').click();

  cy.get('a')
    .contains('Logged in as')
    .should('be.visible');
});

Cypress.Commands.add('acessarProdutos', () => {
  cy.visit('/products');

  cy.get('.features_items .product-image-wrapper')
    .should('have.length.greaterThan', 0);
});

Cypress.Commands.add('adicionarPrimeiroProduto', () => {
  cy.get('.features_items .product-image-wrapper')
    .first()
    .find('.add-to-cart')
    .first()
    .click();

  cy.get('#cartModal').should('be.visible');
});
Cypress.Commands.add('abrirCarrinho', () => {
  cy.get('#cartModal')
    .contains('View Cart')
    .click();

  cy.url().should('include', '/view_cart');
  cy.get('.cart_description').should('be.visible');
});