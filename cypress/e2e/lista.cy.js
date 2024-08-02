/// <reference types="cypress" />

const urlBase = Cypress.env('urlBase')
const login = Cypress.env('login')
const pwd = Cypress.env('pwd')

describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit(urlBase)
    cy.login(login, pwd)
  })
  it('Mapeia todos os elementos da pagina', () => {
    cy.get('.product_label').should('contain', 'Products')
    cy.get('.product_sort_container').should('be.visible')
    cy.get('.inventory_list').should('be.visible')
    cy.get('.inventory_list > :nth-child(1)').should('be.visible')
    cy.get('.inventory_list > :nth-child(6)').should('be.visible')
  })

})