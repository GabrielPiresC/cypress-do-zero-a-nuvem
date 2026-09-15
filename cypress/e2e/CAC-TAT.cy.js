describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

// Exercício 1
  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)
    
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Pires')
    cy.get('#email').type('barbogabriel@gmail.com')
    cy.get('#open-text-area').type('Testar teste testanto', { delay: 0 })
    cy.contains('button', 'Enviar').click() //Exercício 8

    cy.get('.success').should('be.visible')
  })

// Exercício 2
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Pires')
    cy.get('#email').type('barbogabriel@gmail,com')
    cy.get('#open-text-area').type('Testar teste testanto')
    cy.contains('button', 'Enviar').click() //Exercício 8

    cy.get('.error').should('be.visible')
  })

// Exercício 3
  it('campo telefone continua vazio quando preenchido com valor não-numérico', () => {
    cy.get('#phone')
      .type('abcdefghij')
      .should('have.value', '')
  })

// Exercício 4
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Pires')
    cy.get('#email').type('barbogabriel@gmail.com')
    cy.get('#open-text-area').type('Testar teste testanto')
    cy.get('#phone-checkbox').check()
    cy.contains('button', 'Enviar').click() //Exercício 8

    cy.get('.error').should('be.visible')
  })

// Exercício 5
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Gabriel')
      .should('have.value', 'Gabriel')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('Pires')
      .should('have.value', 'Pires')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('barbogabriel@gmail.com')
      .should('have.value', 'barbogabriel@gmail.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('51983103050')
      .should('have.value', '51983103050')
      .clear()
      .should('have.value', '')
  })

// Exercício 6
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click() //Exercício 8

    cy.get('.error').should('be.visible')
  })

// Exercício 7.1 / Comandos Customizados
  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
    
    cy.get('.success').should('be.visible')
  })

// Exercício 7.2 / Comandos Customizados
  /*it('envia o formulário com sucesso usando um comando customizado', () => {
    const data = {
      firstName: 'Gabriel',
      lastName: 'Pires',
      email: 'barbogabriel@gmail.com',
      openTextArea: 'Testar teste testanto'
    }

    cy.fillMandatoryFieldsAndSubmit(data)
    
    cy.get('.success').should('be.visible')
  })*/

// Exercício 7.3 / Comandos Customizados
  /*it('envia o formulário com sucesso usando um comando customizado', () => {

    cy.fillMandatoryFieldsAndSubmit()
    
    cy.get('.success').should('be.visible')
  })*/

// Exercício 8
// Trocar todos cy.get() por cy.contains() onde identificamos o botão de clique

})