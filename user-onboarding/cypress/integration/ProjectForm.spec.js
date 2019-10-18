import { get } from "http"

describe("Checking Form for functionality", () => {
    beforeEach(()=> {cy.visit('/')})
    it("checks for display", () => {
        cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh')
        .should("be.visible")
    })
    it("has a name input", ()=>{
        cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh').find('[name="name"]').should('be.visible')
    })
    it("has a email input", ()=>{
        cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh').find('[name="email"]').should('be.visible')
    })
    it("has a password input", ()=>{
        cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh').find('[name="password"]').should('be.visible')
    })
    it("has a TOS input", ()=>{
        cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh').find('[name="TOS"]').should('be.visible')
    })
})
//as you push things to DOM you can take those classes that the other libraries are creating and plug them right into your tests (a reason to create your tests AS you code)