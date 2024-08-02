/// <reference types="cypress" />

const urlBase = Cypress.env('urlBase')
const login = Cypress.env('login')
const pwd = Cypress.env('pwd')

describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit(urlBase)
    cy.login(login, pwd)
  })
  
  
  it('Remove item', () => {
    cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(4) > .pricebar > .btn_secondary').click()
    // valida se tem 1 elemento no carrinho
    cy.get('.fa-layers-counter').should('contain', '1')

  })

  it('Adiciona itens no carrinho', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
    // valida se tem 3 elementos no carrinho
    cy.get('.fa-layers-counter').should('contain', '3')
  })

  it('Fluxo de compra', () => {
    cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
    cy.get('.fa-layers-counter').click()

    // valida se o item adicionado esta no checkin
    cy.get('#item_2_title_link > .inventory_item_name').should('contain', 'Sauce Labs Onesie')

    // remove item da lista
    cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').click()

    cy.get('.btn_action').click()

    // preenche infos
    cy.get('[data-test="firstName"]').type('primeiro nome')
    cy.get('[data-test="lastName"]').type('ultimo nome')
    cy.get('[data-test="postalCode"]').type('00000000')
    cy.get('.btn_primary').click()

    // infos de cartao
    cy.get('.cart_list > :nth-child(3)').should('be.visible')
    cy.get('.summary_info > :nth-child(2)').should('contain', 'SauceCard #31337')
    cy.get('.btn_action').click()

    // fluxo final
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
    cy.get('.pony_express').should('be.visible')

  })
  
})