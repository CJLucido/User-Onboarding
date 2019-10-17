describe("It should load the App page at the baseUrl", () => {
    beforeEach(()=>{cy.visit("/")})
    it("ensures the title loads as an h1", () => {
        cy.get('h1').should('be.visible')
    })
    it.only("ensures that a form is displayed", () => {
        cy.get("FormikProjectForm").should("be.visible")
    })
})