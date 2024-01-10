import data from '../../fixtures/elements.json'

Cypress.Commands.add('LaunchApp',()=>{
        cy.visit('/')
})

Cypress.Commands.add('InsertUsername',()=>{
       cy.get(data.usernameField).should('be.visible').type(data.userName)
})

Cypress.Commands.add('InsertPassword',()=>{
        cy.get(data.passwordField).should('be.visible').type(data.password)
})

Cypress.Commands.add('ClickLogin',()=>{
        cy.get(data.LoginButton).should('be.visible').click()
})

Cypress.Commands.add('VerifyProduct',()=>{
        cy.get(data.signOutButton).should('be.visible')
})