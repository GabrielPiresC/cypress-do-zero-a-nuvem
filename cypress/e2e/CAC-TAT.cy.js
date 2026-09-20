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
    cy.get('#phone-checkbox').check() //Exercício extra Aula 5
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

// Exercício 1 Aula 3
  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

// Exercício extra 1 Aula 3
  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

// Exercício extra 2 Aula 3
  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })

// Exercício 1 Aula 4

it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
})

// Exercício extra Aula 4

it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
        .check()
        .should('be.checked')
      })
})

// Exercício Aula 5

it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
})

// Execício Aula 6

it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
})

// Exercício extra 1 Aula 6

it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
})

// Exercício extra 2 Aula 6

it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
})

// Exercício Aula 7

it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
})

// Exercício extra 1 Aula 7

it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
})

// Exercício extra 2 Aula 7
// privacyPolicy.cy.js


})