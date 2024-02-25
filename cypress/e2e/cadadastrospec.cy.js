describe('Cadastro nubank', () => {
  it('passes', () => {
    cy.visit('https://nubank.com.br/')

    cy.get('#field-cpf').type('198.561.854-08')
    cy.get('#test').click()
    cy.get('#field-name').type('Adriana silva')
    cy.get('#field-phone').type('77981683611')
    cy.get('#field-email').type('adrianassilva@gmail.com')
    cy.get('#field-emailConfirmation').type('adrianassilva@gmail.com')
    cy.get('#label-acceptedWhatsapp > .sc-lkltAP > .sc-ksNGjt').click()
    cy.get('#label-accepted > span.sc-bYWUiG.gaLLqc > svg').click()
    cy.get('.hNOIJl > .sc-UnBNk').click()
    cy.get('.sc-dLlDCe > .sc-ksNGjt')
    
   

  })
})