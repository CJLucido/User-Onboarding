import { get } from "http"

// describe("Checking Form for functionality", () => {
//     beforeEach(()=> {cy.visit('/')})
//     it("checks for display", () => {
//         cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh')
//         .should("be.visible")
//     })
//     it("has a name input", ()=>{
//         cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh').find('[name="name"]').should('be.visible')
//     })
//     it("has a email input", ()=>{
//         cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh').find('[name="email"]').should('be.visible')
//     })
//     it("has a password input", ()=>{
//         cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh').find('[name="password"]').should('be.visible')
//     })
//     it("has a TOS input", ()=>{
//         cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh').find('[name="TOS"]').should('be.visible')
//     })
// })

///////////////////////////////NOTE/////////////////////////////////////////

//The problem with the test above is that it does too many GETs, it's not DRY
//as you push things to DOM you can take those classes that the other libraries are creating and plug them right into your tests (a reason to create your tests AS you code)

////////////////////////////////////////////////////////////////////////////


// describe("Checking Form for functionality", () => {
//     beforeEach(()=> {cy.visit('/')})
//     it("checks for display", () => {
//         cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh')
//         .should("be.visible")
      
//     })
//     it('checks to see if all inputs are displaying', () =>{
//         cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh')
//         .find('div','[name="name"]')

/////////////////////////////////////NOTE////////////////////////////

//         .find('div', '[name="email"]')///the problem with this test is that it continues to go to lower and lower divs, so if I had more inputs I wouldn't be able to reach them, settin gthe selectors to input will not find the  email and setting them to the exact div.class will not find any of them

///////////////////////////////////////////////////////////////////////

//          .find('[name="TOS"]' ) 
//     })
// })


/////BOOM- best answer: once you get to the level of thing you want to test for, find all of it's siblings with a nextAll

describe("Checking Form for functionality", () => {
    beforeEach(()=> {cy.visit('/')})
    it("checks for display", () => {
        cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh')
        .should("be.visible")
      
    })
    it('checks to see if all inputs are displaying', () =>{
        cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh')
        .find('input','[name="name"]')
        .nextAll() 
    })
    it("check Submit button click", ()=>{
        cy.get('button').contains('Submit').click()
    })
    it('checks actionability of input Name', () => {
        cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh')//HOW TO NOT REPEAT THIS
        .find('[placeholder="Enter your name here"]', 'input')
        .type('Booger')  
    })
    it("checks actionability of Email input",  () => {
        cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh')//HOW TO NOT REPEAT THIS
        .find('[placeholder="Enter your email here"]', 'input')
        .type('Booger@boogies.com')  
    })
    it('checks actionability of Pasword input', () => {
        cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh')//HOW TO NOT REPEAT THIS
        .find('[placeholder="Enter your password here"]', 'input')
        .type('Boogersssss')  
    })
    it('checks actionability of Terms of service checkbox', () =>{
        cy.get('div').should('have.class', 'sc-bdVaJa bZoDRh')//HOW TO NOT REPEAT THIS
        .find('[placeholder="Check if you agree to the Terms of Service"]', 'input')
        .check()  
    })
})