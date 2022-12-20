/// <reference types="cypress" />

describe('faq page loads', () => {
    beforeEach(() => {
      cy.visit('/FAQ')
      cy.injectAxe();
    })
  
    it('displays the faq page', () => {
      cy.url().should("contains", "/FAQ");
    })

    it('should locate h1',()=>{
        cy.get('h1').should('contain.text','Frequently Asked Questions')
    })  

    it('expand question',()=>{
        cy.get('#1 button').click()
        cy.get('html').should('contain.text','The service is currently only available to teams that work in Employment and Social Development Canada (ESDC), a department of the Government of Canada.')
    })
  
    it('faq page has no detectable a11y violations on load', () => {
      cy.checkA11y()
    })
  })
  