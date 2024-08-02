/// <reference types="cypress" />

const urlBase = Cypress.env('urlBase')
const login = Cypress.env('login')
const pwd = Cypress.env('pwd')

describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit(urlBase)
  })
  it('Mapeia todos os elementos da pagina', () => {
    cy.get('.login_logo').should('be.visible')
    cy.get('.login_wrapper-inner').should('be.visible')
    cy.get('.bot_column').should('be.visible')
    cy.get('.login_credentials_wrap-inner').should('be.visible')
  })
  it('Login com falha', () => {
    cy.login('locked_out_user', pwd)
    cy.get('[data-test="error"]').should('be.visible')
  })
  it('Login com sucesso', () => {
    cy.login(login, pwd)

    // valida a url, a página pós login
    cy.url().should('include', '/inventory.html')
  })

})