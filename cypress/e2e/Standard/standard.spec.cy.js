import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I launch the SwagLab site$/,()=>{
        cy.LaunchApp()
})

Then(/^I insert the standard username$/,()=>{
       cy.InsertUsername()
})

Then(/^I insert the password$/,()=>{
        cy.InsertPassword()
})

Then(/^I click the Login button$/,()=>{
        cy.ClickLogin()
})

Then(/^I should see the products page$/,()=>{
        cy.VerifyProduct()
})