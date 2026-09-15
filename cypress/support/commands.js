// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Exercício 7.1 / Comandos Customizados

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Pires')
    cy.get('#email').type('barbogabriel@gmail.com')
    cy.get('#open-text-area').type('Testar teste testanto')
    cy.get('.button[type="submit"]').click()
})

// Exercício 7.2 / Comandos Customizados

/*Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.openTextArea)
    cy.get('.button[type="submit"]').click()
})*/

// Exercício 7.3 / Comandos Customizados

/*Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    openTextArea: 'Mensagem de teste para testar.'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.openTextArea)
    cy.get('.button[type="submit"]').click()
})*/