
describe('Meu primeiro projeto de automação', () => {

  it('Deve acessar a página inicial do Automation Exercise', () => {

    cy.visit('/');

    cy.title().should('include', 'Automation Exercise');

  });

});
