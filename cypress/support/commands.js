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

import 'cypress-file-upload';
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('login_SuperAdmin', (SAusername, SApassword) => {
    cy.visit('https://holisticly-staging.herokuapp.com/super_administrators/sign_in')
    cy.get('#super_administrator_email').type(SAusername)
    cy.get('#super_administrator_password').type(SApassword)
    cy.get('.registration_form--actions--submit').click()
});

Cypress.Commands.add('CreateOffer', (OfferData) => {
    cy.visit('https://holisticly-staging.herokuapp.com/offers/new')
    cy.get('#js-offer-name').type(OfferData.OfferTitle, { force: true })
    cy.get('#offer_detail').type(OfferData.Detail, { force: true })
    cy.get('#offer_avatar').attachFile(OfferData.OfferImage)
    cy.get('#offer_price').type(OfferData.Price, { force: true })
    cy.get('#offer_credit').type(OfferData.Credits, { force: true })
    cy.get('#offer_partner_payout').type(OfferData.Partner_payout, { force: true })
    cy.get('.select_box').click({ force: true })
    cy.contains(OfferData.category).click({ force: true })
    cy.get('#js-offer-type').type(OfferData.OfferType, { force: true })
    cy.get('#offer_compatibility').select(OfferData.compatibility, { force: true })
    cy.get('#offer_slug_name').type(OfferData.OfferURL, { force: true })
    cy.get('.form--actions--submit').click({ force: true })

});