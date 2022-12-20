/// <reference types="cypress" />

describe('coaches page loads', () => {
    beforeEach(() => {
      cy.visit('/about/coaches')
      cy.injectAxe();
    })
  
    it('displays the coaches page', () => {
      cy.url().should("contains", "/about/coaches");
    })

    it('should locate h1',()=>{
        cy.get('h1').should('contain.text','Our Team')
    })  
  
    it('has no detectable a11y violations on load', () => {
      cy.checkA11y()
    })
  })
  