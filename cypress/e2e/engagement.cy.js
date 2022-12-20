/// <reference types="cypress" />

describe('engagement page loads', () => {
    beforeEach(() => {
      cy.visit('/engagement')
      cy.injectAxe();
    })
  
    it('displays the engagement page', () => {
      cy.url().should("contains", "/engagement");
    })

    it('should locate h1',()=>{
        cy.get('h1').should('contain.text','Start a Team Engagement')
    })  

    it('should type input',()=>{
        cy.get('#first_name').type('first name')
        cy.get("#first_name").should('contain.value','first name')
    })
  
    it('engagement page has no detectable a11y violations on load', () => {
      cy.checkA11y()
    })
  })
  