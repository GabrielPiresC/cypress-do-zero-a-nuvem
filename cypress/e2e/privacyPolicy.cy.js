// Exercício extra 2 Aula 7
it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html')

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
    cy.contains('p', 'Talking About Testing').should('be.visible')
})

// Exercício Aula 12 Lodash

Cypress._.times(5, () => {
    it('exercício 12 - testando a página da política de privacidade de forma independente', () => {
        cy.visit('./src/privacy.html')

        cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
        cy.contains('p', 'Talking About Testing').should('be.visible')
    })
})