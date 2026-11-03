
describe('Testes de Login', () => {

  // CASO 03 - Login inválido
  it('Deve impedir login com e-mail e senha incorretos', () => {

    cy.visit('/login');

    cy.contains('h2', 'Login to your account')
      .should('be.visible');

    cy.get('[data-qa="login-email"]')
      .type('emailinvalido@example.com');

    cy.get('[data-qa="login-password"]')
      .type('senha123456');

    cy.get('[data-qa="login-button"]')
      .click();

    cy.contains('Your email or password is incorrect!')
      .should('be.visible');

  });

  // CASO 02 - Login válido
  it('Deve realizar login com credenciais corretas', () => {

    cy.fixture('usuarios').then((usuario) => {

      cy.visit('/login');

      cy.get('[data-qa="login-email"]')
        .type(usuario.usuarioValido.email);

      cy.get('[data-qa="login-password"]')
        .type(usuario.usuarioValido.senha);

      cy.get('[data-qa="login-button"]')
        .click();

      cy.contains('Logged in as')
        .should('be.visible');

    });

  });

  // CASO 04 - Logout
  it('Deve realizar logout com sucesso', () => {

    cy.fixture('usuarios').then((usuario) => {

      cy.visit('/login');

      cy.get('[data-qa="login-email"]')
        .type(usuario.usuarioValido.email);

      cy.get('[data-qa="login-password"]')
        .type(usuario.usuarioValido.senha);

      cy.get('[data-qa="login-button"]')
        .click();

      cy.contains('Logged in as')
        .should('be.visible');

      cy.contains('Logout')
        .click();

      cy.contains('Login to your account')
        .should('be.visible');

    });

  });

});
