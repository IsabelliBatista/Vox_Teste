/// <reference types="cypress" />

const urlBase = Cypress.env('urlBase')
const login = Cypress.env('login')
const pwd = Cypress.env('pwd')

describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit(urlBase)
  })
  it('Login com sucesso', () => {
    cy.login(login, pwd)
  })

})