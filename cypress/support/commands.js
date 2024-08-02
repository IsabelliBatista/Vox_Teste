Cypress.Commands.add('login', (login, pwd) => {
    cy.get('[data-test=username]').type(login)
    cy.get('[data-test=password]').type(pwd)
    cy.get('#login-button').click()
  });
  