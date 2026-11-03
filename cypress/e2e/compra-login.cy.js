
describe('Fluxo de compra com login', () => {
  it('Caso 16 - Deve realizar compra após fazer login', () => {

    // 1. Realizar login com usuário válido
    cy.fixture('usuarios').then((usuario) => {
      cy.login(
        usuario.usuarioValido.email,
        usuario.usuarioValido.senha
      );
    });

    // 2. Acessar produtos
    cy.acessarProdutos();

    // 3. Adicionar primeiro produto ao carrinho
    cy.adicionarPrimeiroProduto();

    // 4. Abrir carrinho
    cy.abrirCarrinho();

    // 6. Prosseguir para checkout
    cy.contains('Proceed To Checkout').click();

    // 7. Validar detalhes do checkout
    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');

  });
});
