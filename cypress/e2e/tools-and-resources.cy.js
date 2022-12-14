/// <reference types="cypress" />

describe('tools and resources page loads', () => {
    beforeEach(() => {
      cy.visit('/tools-and-resources')
      cy.injectAxe();
    })
  
    it('displays the tools and resources page', () => {
      cy.url().should("contains", "/tools-and-resources");
    })

    it('should locate h1',()=>{
        cy.get('h1').should('contain.text','Tools and Resources')
    })  

    it('toggle glossary term and open definition',()=>{
        cy.get('button[value=F]').click()
        cy.get('details').first().click()
        cy.get('html').should('contain.text','Fail-fast is the process of starting work on a task or project')
    })

    it('tools and resources page has no detectable a11y violations on load', () => {
      cy.checkA11y()
    })
  })
  