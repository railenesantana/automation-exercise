
describe('Fluxo de compra', () => {

  it('Caso 15 - Deve cadastrar usuário durante o checkout', () => {

    // 1. Acessar produtos
    cy.visit('/products');

    // 2. Adicionar produto ao carrinho
    cy.get('.features_items .product-image-wrapper')
      .first()
      .find('.add-to-cart')
      .first()
      .click();

    // 3. Verificar modal do carrinho
    cy.get('#cartModal').should('be.visible');

    // 4. Abrir carrinho
    cy.get('#cartModal')
      .contains('View Cart')
      .click();

    // 5. Validar produto no carrinho
    cy.url().should('include', '/view_cart');
    cy.get('.cart_description').should('be.visible');

    // 6. Prosseguir para checkout
    cy.contains('Proceed To Checkout').click();

    // 7. Abrir cadastro
    cy.get('#checkoutModal').should('be.visible');

    cy.get('#checkoutModal')
      .find('a[href="/login"]')
      .click();

    // 8. Gerar e-mail exclusivo
    const email = `railene${Date.now()}${Math.floor(Math.random() * 1000)}@teste.com`;

    // 9. Preencher cadastro inicial
    cy.contains('New User Signup!').should('be.visible');

    cy.get('[data-qa="signup-name"]').type('Usuário Teste');
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    // 10. Preencher informações da conta
    cy.contains('Enter Account Information').should('be.visible');

    cy.get('#id_gender2').check();
    cy.get('[data-qa="password"]').type('Teste@123456');

    cy.get('[data-qa="days"]').select('10');
    cy.get('[data-qa="months"]').select('5');
    cy.get('[data-qa="years"]').select('1996');

    cy.get('[data-qa="first_name"]').type('Usuário');
    cy.get('[data-qa="last_name"]').type('Teste');
    cy.get('[data-qa="address"]').type('Rua de Teste');

    cy.get('[data-qa="country"]').select('Canada');

    cy.get('[data-qa="state"]').type('Ontario');
    cy.get('[data-qa="city"]').type('Toronto');
    cy.get('[data-qa="zipcode"]').type('12345');
    cy.get('[data-qa="mobile_number"]').type('1234567890');

    // 11. Criar conta
    cy.get('[data-qa="create-account"]').click();

    // 12. Validar criação da conta
    cy.url().should('include', '/account_created');
    cy.contains('Account Created!').should('be.visible');

    cy.get('[data-qa="continue-button"]').should('be.visible');

    // 13. Continuar após criação
    cy.get('[data-qa="continue-button"]').click();

    // 14. Validar usuário logado
    cy.contains('Logged in as').should('be.visible');

    // 15. Acessar carrinho novamente
    cy.contains('Cart').click();

    // 16. Verificar produto no carrinho
    cy.url().should('include', '/view_cart');
    cy.get('.cart_description').should('be.visible');

    // 17. Prosseguir para checkout
    cy.contains('Proceed To Checkout').click();

    // 18. Validar detalhes do checkout
    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');

    // 19. Inserir comentário no pedido
    cy.get('textarea[name="message"]')
      .type('Pedido realizado para teste de automação.');

    // 20. Clicar em Place Order
    cy.contains('Place Order').click();

    // 21. Preencher dados de pagamento
    cy.get('[data-qa="name-on-card"]').type('Usuário Teste');
    cy.get('[data-qa="card-number"]').type('4111111111111111');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2030');

    // 22. Confirmar pagamento
    cy.get('[data-qa="pay-button"]').click();

    // 23. Validar pedido realizado
    cy.contains('Order Placed!').should('be.visible');

  });

});
