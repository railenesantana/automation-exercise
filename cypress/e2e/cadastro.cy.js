
describe('Cadastro de usuário', () => {

  // CASO 01 - Cadastro de novo usuário
  it('Caso 01 - Deve cadastrar um novo usuário com sucesso', () => {

    const email = `railene${Date.now()}${Math.floor(Math.random() * 1000)}@teste.com`;

    cy.visit('/');

    cy.contains('Signup / Login').click();

    cy.contains('New User Signup!')
      .should('be.visible');

    cy.get('[data-qa="signup-name"]')
      .type('Usuário Teste');

    cy.get('[data-qa="signup-email"]')
      .type(email);

    cy.get('[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information')
      .should('be.visible');

    cy.get('#id_gender2').check();

    cy.get('[data-qa="password"]')
      .type('Teste@123456');

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

    cy.get('[data-qa="create-account"]').click();

    cy.contains('Account Created!')
      .should('be.visible');

  });

  // CASO 05 - Cadastro com e-mail já existente
  it('Caso 05 - Deve impedir cadastro com e-mail já existente', () => {

    cy.visit('/');

    cy.contains('Signup / Login').click();

    cy.contains('New User Signup!')
      .should('be.visible');

    cy.get('[data-qa="signup-name"]')
      .type('Usuário Teste');

    cy.get('[data-qa="signup-email"]')
      .type('railene.santanna@gmail.com');

    cy.get('[data-qa="signup-button"]').click();

    cy.contains('Email Address already exist!')
      .should('be.visible');

  });

});
