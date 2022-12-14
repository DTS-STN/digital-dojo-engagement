/// <reference types="cypress" />

describe('events page loads', () => {
    beforeEach(() => {
      cy.visit('/events')
      cy.injectAxe();
    })
  
    it('displays the events page', () => {
      cy.url().should("contains", "/events");
    })

    it('should locate h1',()=>{
        cy.get('h1').should('contain.text','Dojo Events Calendar')
    })  

    it('should find current month and then the next month',()=>{
        let months = 'January February March April May June July August September October November December'.split` ` 
        let currentMonth = new Date().getMonth()
        cy.get('html').should('contain.text',months[currentMonth])

        cy.get("#nextMonth").click()
        cy.get('html').should('contain.text',months[(currentMonth+1)%12])
    })
  
    it('events page has no detectable a11y violations on load', () => {
      cy.checkA11y()
    })
  })
  