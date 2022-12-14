/// <reference types="cypress" />

describe('contact page loads', () => {
    beforeEach(() => {
      cy.visit('/contact')
      cy.injectAxe();
    })
  
    it('displays the contact page', () => {
      cy.url().should("contains", "/contact");
    })

    it('should locate h1',()=>{
        cy.get('h1').should('contain.text','Contact Us')
    })  

    it('should type input',()=>{
        cy.get('#firstName').type('first name')
        cy.get("#firstName").should('contain.value','first name')
    })
  
    it('contact page has no detectable a11y violations on load', () => {
      cy.checkA11y()
    })
  })
  