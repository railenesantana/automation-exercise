
describe('Produtos', () => {

  it('Caso 08 - Deve visualizar todos os produtos e seus detalhes', () => {

    // 1. Acessar a página inicial
    cy.visit('/');

    // 2. Clicar em Products
    cy.contains('Products').click();

    // 3. Validar que está na página de produtos
    cy.url().should('include', '/products');

    cy.contains('All Products')
      .should('be.visible');

    // 4. Verificar se existem produtos listados
    cy.get('.features_items .product-image-wrapper')
      .should('have.length.greaterThan', 0);

    // 5. Abrir o primeiro produto
    cy.get('.features_items .product-image-wrapper')
      .first()
      .contains('View Product')
      .click();

    // 6. Validar a página de detalhes
    cy.url().should('include', '/product_details/');

    cy.get('.product-information')
      .should('be.visible');

    // 7. Verificar informações do produto
    cy.get('.product-information h2')
      .should('be.visible');

    cy.get('.product-information')
      .should('contain', 'Category:');

    cy.get('.product-information')
      .should('contain', 'Availability:');

    cy.get('.product-information')
      .should('contain', 'Condition:');

    cy.get('.product-information')
      .should('contain', 'Brand:');

  });

it('Caso 09 - Deve pesquisar produtos', () => {

  // 1. Acessar a página inicial
  cy.visit('/');

  // 2. Clicar em Products
  cy.contains('Products').click();

  // 3. Validar a página de produtos
  cy.contains('All Products')
    .should('be.visible');

  // 4. Pesquisar um produto
  cy.get('#search_product')
    .type('Top');

  cy.get('#submit_search')
    .click();

  // 5. Validar os resultados
  cy.contains('Searched Products')
    .should('be.visible');

  cy.get('.features_items .product-image-wrapper')
    .should('have.length.greaterThan', 0);

});

it('Caso 10 - Deve verificar a assinatura na página inicial', () => {

  // 1. Acessar a página inicial
  cy.visit('/');

  // 2. Rolar até o rodapé
  cy.get('footer').scrollIntoView();

  // 3. Validar o título Subscription
  cy.contains('Subscription')
    .should('be.visible');

  // 4. Informar e-mail
  cy.get('#susbscribe_email')
    .type(`teste${Date.now()}@example.com`);

  // 5. Clicar no botão de inscrição
  cy.get('#subscribe')
    .click();

  // 6. Validar mensagem de sucesso
  cy.contains('You have been successfully subscribed!')
    .should('be.visible');

});

});
